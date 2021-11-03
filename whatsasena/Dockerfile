FROM fusuf/whatsasena:latest

RUN git clone https://github.com/xmain12/Stefanie-V-9.2-beta /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
