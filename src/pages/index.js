import './index.scss';

const emoji = ['🙃', '😸', '🏄', '🚀', '🔥', '😄', '🖖'];

const consoleStyles = {
    styles: 'font-family: "Segoe UI"; font-size: 14px; color: #fff; background-color: #77C043; padding: 6px 8px;',
};

const randomEmoji = () => {
    const random = Math.floor(Math.random() * emoji.length);

    return emoji[random];
};

console.log(`%chello! ${randomEmoji()}. developed by ayazbayev serik`, consoleStyles.styles);
