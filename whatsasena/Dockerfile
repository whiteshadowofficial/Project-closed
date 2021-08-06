FROM fusuf/whatsasena:latest

RUN git clone https://github.com/twiiceuif/AlphaV2.git /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV REPO="https://twiiceuif/AlphaV2"
ENV TZ=Europe/Istanbul

RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["run.sh"]
