# Claude Code Session Notes - Holiday Yachts

## Server Details
- **Server IP:** 134.209.137.11
- **User:** holidaygulet
- **Port:** 3005
- **Domain:** holidaygulet.com
- **App Location:** /home/holidaygulet/holidayyachts

## Deploy Command
```bash
ssh holidaygulet@134.209.137.11 "cd ~/holidayyachts && git pull && source ~/.nvm/nvm.sh && npm install && npm run build && pm2 restart holidaygulet"
```

## Database
- **Host:** 134.209.137.11
- **Database:** holidaygulet
- **User:** holidaygulet
- **Password:** Sk235672.-Yt

## Related Projects
- kayalarturistik.com (port 3006) - lighttours repo
- maviyolculukgezisi.com (port 3007) - maviyolculukgezisi repo
