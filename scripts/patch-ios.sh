#!/usr/bin/env bash
# Patch the generated iOS Info.plist so the app can:
#   1. load the author's HTTP (cleartext) cloud music API at *.alger.fun
#      (iOS App Transport Security blocks plain HTTP by default)
#   2. keep playing audio in the background / on the lock screen
#   3. rotate to all orientations on iPad
set -e

PLIST="${1:-ios/App/App/Info.plist}"

if [ ! -f "$PLIST" ]; then
  echo "Info.plist not found at $PLIST" >&2
  exit 1
fi

# --- App Transport Security: allow the author's HTTP cloud API ---
PlistBuddy_add() {
  /usr/libexec/PlistBuddy -c "$1" "$PLIST" 2>/dev/null || true
}

PlistBuddy_add "Add :NSAppTransportSecurity dict"
PlistBuddy_add "Add :NSAppTransportSecurity:NSAllowsArbitraryLoads bool true"
PlistBuddy_add "Add :NSAppTransportSecurity:NSAllowsLocalNetworking bool true"
# Explicit exception for alger.fun subdomains (mc.alger.fun / music.alger.fun)
PlistBuddy_add "Add :NSAppTransportSecurity:NSExceptionDomains dict"
PlistBuddy_add "Add :NSAppTransportSecurity:NSExceptionDomains:alger.fun dict"
PlistBuddy_add "Add :NSAppTransportSecurity:NSExceptionDomains:alger.fun:NSExceptionAllowsInsecureHTTPLoads bool true"
PlistBuddy_add "Add :NSAppTransportSecurity:NSExceptionDomains:alger.fun:NSIncludesSubdomains bool true"
PlistBuddy_add "Add :NSAppTransportSecurity:NSExceptionDomains:alger.fun:NSMinimumTLSVersion string TLSv1.0"
# gdstudio music api (https) - no exception needed, but whitelist in case of cert quirks
PlistBuddy_add "Add :NSAppTransportSecurity:NSExceptionDomains:gdstudio.xyz dict"
PlistBuddy_add "Add :NSAppTransportSecurity:NSExceptionDomains:gdstudio.xyz:NSExceptionAllowsInsecureHTTPLoads bool true"
PlistBuddy_add "Add :NSAppTransportSecurity:NSExceptionDomains:gdstudio.xyz:NSIncludesSubdomains bool true"

# --- Background audio (lock screen / control center playback) ---
PlistBuddy_add "Delete :UIBackgroundModes"
PlistBuddy_add "Add :UIBackgroundModes array"
PlistBuddy_add "Add :UIBackgroundModes:0 string audio"

# --- Status bar / rotation ---
PlistBuddy_add "Set :UIViewControllerBasedStatusBarAppearance false"
# iPad: allow all orientations; iPhone: portrait primary
PlistBuddy_add "Delete :UISupportedInterfaceOrientations"
PlistBuddy_add "Add :UISupportedInterfaceOrientations array"
PlistBuddy_add "Add :UISupportedInterfaceOrientations:0 string UIInterfaceOrientationPortrait"
PlistBuddy_add "Add :UISupportedInterfaceOrientations:1 string UIInterfaceOrientationLandscapeLeft"
PlistBuddy_add "Add :UISupportedInterfaceOrientations:2 string UIInterfaceOrientationLandscapeRight"
PlistBuddy_add "Delete :UISupportedInterfaceOrientations~ipad"
PlistBuddy_add "Add :UISupportedInterfaceOrientations~ipad array"
PlistBuddy_add "Add :UISupportedInterfaceOrientations~ipad:0 string UIInterfaceOrientationPortrait"
PlistBuddy_add "Add :UISupportedInterfaceOrientations~ipad:1 string UIInterfaceOrientationPortraitUpsideDown"
PlistBuddy_add "Add :UISupportedInterfaceOrientations~ipad:2 string UIInterfaceOrientationLandscapeLeft"
PlistBuddy_add "Add :UISupportedInterfaceOrientations~ipad:3 string UIInterfaceOrientationLandscapeRight"

echo "Info.plist patched OK:"
/usr/libexec/PlistBuddy -c "Print :NSAppTransportSecurity" "$PLIST" || true
/usr/libexec/PlistBuddy -c "Print :UIBackgroundModes" "$PLIST" || true
