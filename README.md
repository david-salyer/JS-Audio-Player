# Offline JS Audio Player

###### :man: Made by a Meatbag in 2023 :man:

---

## Please Note

- This application was designed for use with Chrome and Chromium based browsers.  It may work with other browser types, but was not designed to do so, and has not been tested on those environments.
- Although designed to be used with a web browser, it was also created in JavaScript with no PHP or jQuery, (although that would have made things easier,) specifically so that it could be used entirely offline without the aid of connected code dependencies.
- There has been some success in playing audio files that are not in the MP3 file format, but again, the player was not designed with this in mind.

### Chrome Web App Via Windows Shortcut

1. Create shortcut .lnk file
2. Destination Location: "C:\Program Files\Google\Chrome\Application\chrome_proxy.exe" -app=C:\[location of file]\player.html
3. A 256 x 256 px ico file has been provided for this shortcut icon, and the taskbar icon pulls from within the HTML.

### Chrome Web App Via Chrome OS

1. Creating an offline compatible chrome web app proved to be a difficult undertaking, so a popout windows function was created to replicate the minimal layout desired.
2. If you desire the integrated look of having an app icon, and super minimal window header, then you can create a web app to the online version located at [david-salyer.github.io/JS-Audio-Player](https://david-salyer.github.io/JS-Audio-Player/).  This will lose the flexibility of being able to use this application while not connected to the internet, and all customization that comes from having an editable .html file however.
3. Three Dots (Upper-Right) > Cast, save, and share > Create Shortcut (Does not work for local files- only websites.)

## Functionality

- Paste URL for local file path, or online path in box, and press enter to load the file.  Once loaded, hit space or play to play.
- Getting the URL for an online file is easy enough, but if you are having trouble with the file structure of local files, just open the audio file you want to listen to in a new Chrome tab, and copy the generated URL from there to paste into the player.
- If using local files, a 'folder.jpg' file in the same folder as the audio file being played will show as a 50px x 50px album artwork.  If you are using remote files, and they happen to have a folder.jpg file in the same directory for some reason, this will also work.
- If using files with solely numeric filenames, like a [8.mp3, 9.mp3, 10.mp3, 11.mp3], [08.mp3, 09.mp3, 10.mp3, 11.mp3], or [098.mp3, 099.mp3, 100.mp3, 101.mp3] naming scheme, you can enable autoplay to automatically load the next file.  HTML security permissions prevent it from autoplaying once loaded, but you will simply have to press play after the end of the last file, (and re-enable autoplay and speed settings if desired.)
- If you need to diagnose any playback issues, you can raise the window height until the instructions telling you to reduce the height are visible, then click the instructions to show the raw audio html tag.

## Controls

- Space to Play/Pause
- Left/Right Arrows to Seek
- Up/Down Arrows to Change Playback Speed
- ESC to Show/Hide Album Artwork
- When paused, player will automatically rewind three seconds to help ease you back in on resume.