DEVICE=192.168.0.7:5555
# DEVICE=emulator-5554
# DEVICE=R5CNA07BCDF

run:
	npx react-native run-android

tv:
	adb connect 192.168.0.7:5555
	adb -s 192.168.0.7:5555 install -r android/app/build/outputs/apk/release/app-release.apk

# こういうのでindex.android.bundleを追加するとFireTVで動いた
# react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

connect:
	adb connect ${DEVICE}

disconnect:
	adb disconnect

list:
	adb -s ${DEVICE} shell cmd package list packages
list2:
	adb -s ${DEVICE} shell pm list packages -f

install:
	adb -s ${DEVICE} install -r android/app/build/outputs/apk/debug/app-debug.apk

uninstall:
	adb -s ${DEVICE} uninstall com.scandroid
#	adb -s 192.168.0.7:5555 uninstall com.awesomeproject

# Fast Refresh (Hot Reload) をトグルするメニューが出る
menu:
	adb -s ${DEVICE} shell input keyevent 82
key:
	adb -s ${DEVICE} shell input keyevent 48
#
# FireTVだとこういうイベントが出る。エミュレータだと19,20が動かない。80,81ぐらいだと出る
#
up:
	adb -s ${DEVICE} shell input keyevent 19
down:
	adb -s ${DEVICE} shell input keyevent 20

clean:
	cd android; ./gradlew clean
release:
	cd android; ./gradlew assembleRelease
releaseinstall:
	adb -s ${DEVICE} install -r android/app/build/outputs/apk/release/app-release.apk
releaserun:
	npx react-native run-android --variant=release


#run:
#	adb -s 192.168.0.7:5555 shell am start -n com.awesomeproject2/
#	adb -s 192.168.0.7:5555 shell am start -n com.awesomeproject2/.MainActivity
#	adb -s 192.168.0.7:5555 shell am start -n com.facebook.react.devsupport/.DevSettingsActivity


cleaninstall:
	rm -rf android/app/src/main/res/drawable-*
	react-native bundle --platform android --dev false \
		--entry-file index.js \
		--bundle-output android/app/build/generated/assets/react/release/index.android.bundle \
		--assets-dest android/app/build/intermediates/res/merged/release/
	cd android && ./gradlew assembleRelease

#		--bundle-output android/app/src/main/assets/index.android.bundle \



# index.android.bundleが無いといわれるときの対策
# mkdir android/app/src/main/assets
# react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res --verbose
# mv /Users/masui/SCAndroid/android/app/build/generated/res/react/release/raw/app.json /tmp
# mv android/app/src/main/res/raw/app.json  /tmp/android_app_src_main_res_raw_app.json

