FROM fusuf/whatsasena:latest

RUN git clone https://github.com/whiteshadowofficial/Fidha-Mwol-v2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/whiteshadowofficial/uploads

CMD ["node", "bot.js"]
