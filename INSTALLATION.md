# PHP YouTube Video Downloader

## Installation Instructions

1. **Prerequisites**
   - Apache HTTP Server
   - PHP 8.0 or higher
   - `cURL` extension enabled in `php.ini`

2. **Deployment**
   - Download or export this workspace folder as a ZIP.
   - Extract the entire contents into your Apache server's document root (e.g., `/var/www/html/` or `C:/xampp/htdocs/yt-downloader/`).

3. **File Structure Verification**
   Ensure the final directory structure looks like this on your server:
   ```
   /
   ├── index.php
   ├── download.php
   ├── .htaccess
   ├── assets/
   │   ├── css/style.css
   │   └── js/script.js
   └── includes/
       ├── config.php
       └── functions.php
   ```

4. **Security Notice**
   - `.htaccess` disables directory indexing to prevent users from seeing raw assets.
   - CSRF protection is fully enabled for internal `POST` requests.
   - Input fields are strictly filtered via `FILTER_SANITIZE_URL`.

5. **Usage Constraints**
   - *No External APIs utilized:* This software acts as a clean native cURL wrapper over YouTube's `ytInitialPlayerResponse` metadata json payload.
   - YouTube dynamically encodes specific video layers ("signatureCipher"). Formats utilizing complex decryption layers will appear disabled ("Encrypted"). For full unencrypted stream support across all formats, Node-based environments utilizing decryption interpreters are typically required.

Enjoy your elegant, purely native implementation!
