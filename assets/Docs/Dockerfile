FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/whiteshadowofficial/Fidha-Mwol-v2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN git https://github.com/whiteshadowofficial/uploads
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated 
CMD ["node", "bot.js"]

