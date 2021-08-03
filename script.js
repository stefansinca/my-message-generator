
   // First version of a random phrases to display to user
   /* switch(x) {
        case 0:
        console.log('I am swift as a gazelle. An old one. With arthritis. Run over by a Land Rover. 8 days ago.');
        break;
        case 1: 
            console.log(`I asked God for a bike, but I know God doesn’t work that way. So I stole a bike and asked for forgiveness.`);
            break;
            case 2:
                console.log(`I didn’t fall down. I did attack the floor, though.`);
                break;
                case 3:
                    console.log(`I don’t need a hair stylist, my pillow gives me a new hairstyle every morning.`);
                    break;
                    case 4:
                        console.log(`I don’t suffer from insanity, I enjoy every minute of it.`);
                        break;
                        case 5:
                            console.log(`I get enough exercise pushing my luck.`);
                            case 6:
                                console.log(`I had loads to do today. Ah well, so now I have loads to do tomorrow.`);
                                break;
                                case 7:
                                    console.log(`I like to be an optimist. It pisses people off.`);
                                    break;
                                    case 8:
                                        console.log(`I’m going to have a seriously exciting December!`);
                                        case 9:
                                            console.log(`I refuse to have a battle of wits with an opponent so clearly unarmed.`);
                                            break;
                                            case 10:
                                                console.log(`After millions of years of evolution, you’re kind of a disappointment.`);
                                                break;
                                                default:
                                                    console.log(`Please STOP! I'm to funny!`)
    } */

    let letItBe = [' Let it be, let it be, let it be, let it be', ' Whisper words of wisdom, let it be', ' When I find myself in times of trouble']
    let heyJude = [` Hey Jude, don't make it bad`, ` Take a sad song and make it better`, ` Hey Jude, don't let me down`]
    let yesterday = [' Yesterday', " All my troubles seemed so far away", ' Love was such an easy game to play']

    const randomNumber = (arr) => {
          return (arr [Math.floor(Math.random( ) * arr.length)]);
}
    let combineLyrics = randomNumber(letItBe) + randomNumber(heyJude) + randomNumber(yesterday);
    console.log(combineLyrics)