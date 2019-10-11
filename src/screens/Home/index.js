import React, { Component } from 'react';
import { Container } from './styles';
import Carousel from '../../components/carousel';

const arrayTest = [
  {
    "popularity": 290.086,
    "vote_count": 597,
    "video": false,
    "poster_path": "\/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
    "id": 429203,
    "adult": false,
    "backdrop_path": "\/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
    "original_language": "en",
    "original_title": "The Old Man & the Gun",
    "genre_ids": [
      35,
      80,
      18
    ],
    "title": "The Old Man & the Gun",
    "vote_average": 6.3,
    "overview": "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
    "release_date": "2018-09-28"
  },
  {
    "popularity": 365.799,
    "vote_count": 232,
    "video": false,
    "poster_path": "\/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "id": 475557,
    "adult": false,
    "backdrop_path": "\/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
    "original_language": "en",
    "original_title": "Joker",
    "genre_ids": [
      80,
      18,
      53
    ],
    "title": "Joker",
    "vote_average": 8.5,
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "release_date": "2019-10-04"
  },
  {
    "popularity": 250.351,
    "vote_count": 4117,
    "video": false,
    "poster_path": "\/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
    "id": 429617,
    "adult": false,
    "backdrop_path": "\/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
    "original_language": "en",
    "original_title": "Spider-Man: Far from Home",
    "genre_ids": [
      28,
      12,
      878
    ],
    "title": "Spider-Man: Far from Home",
    "vote_average": 7.6,
    "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
    "release_date": "2019-07-02"
  },
  {
    "popularity": 197.005,
    "vote_count": 316,
    "video": false,
    "poster_path": "\/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
    "id": 522938,
    "adult": false,
    "backdrop_path": "\/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
    "original_language": "en",
    "original_title": "Rambo: Last Blood",
    "genre_ids": [
      28,
      53
    ],
    "title": "Rambo: Last Blood",
    "vote_average": 6.2,
    "overview": "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
    "release_date": "2019-09-20"
  },
  {
    "popularity": 171.869,
    "vote_count": 1217,
    "video": false,
    "poster_path": "\/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
    "id": 474350,
    "adult": false,
    "backdrop_path": "\/8moTOzunF7p40oR5XhlDvJckOSW.jpg",
    "original_language": "en",
    "original_title": "It Chapter Two",
    "genre_ids": [
      27
    ],
    "title": "It Chapter Two",
    "vote_average": 7.1,
    "overview": "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
    "release_date": "2019-09-06"
  },
  {
    "popularity": 109.352,
    "vote_count": 8156,
    "video": false,
    "poster_path": "\/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg",
    "id": 920,
    "adult": false,
    "backdrop_path": "\/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg",
    "original_language": "en",
    "original_title": "Cars",
    "genre_ids": [
      12,
      16,
      35,
      10751
    ],
    "title": "Cars",
    "vote_average": 6.7,
    "overview": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
    "release_date": "2006-06-09"
  },
  {
    "popularity": 148.568,
    "vote_count": 2405,
    "video": false,
    "poster_path": "\/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
    "id": 301528,
    "adult": false,
    "backdrop_path": "\/m67smI1IIMmYzCl9axvKNULVKLr.jpg",
    "original_language": "en",
    "original_title": "Toy Story 4",
    "genre_ids": [
      12,
      16,
      35,
      10751
    ],
    "title": "Toy Story 4",
    "vote_average": 7.6,
    "overview": "Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called \"Forky\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.",
    "release_date": "2019-06-21"
  },
  {
    "popularity": 139.48,
    "vote_count": 1351,
    "video": false,
    "poster_path": "\/keym7MPn1icW1wWfzMnW3HeuzWU.jpg",
    "id": 384018,
    "adult": false,
    "backdrop_path": "\/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg",
    "original_language": "en",
    "original_title": "Fast & Furious Presents: Hobbs & Shaw",
    "genre_ids": [
      28
    ],
    "title": "Fast & Furious Presents: Hobbs & Shaw",
    "vote_average": 6.5,
    "overview": "A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.",
    "release_date": "2019-08-02"
  },
  {
    "popularity": 131.59,
    "vote_count": 2730,
    "video": false,
    "poster_path": "\/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    "id": 458156,
    "adult": false,
    "backdrop_path": "\/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
    "original_language": "en",
    "original_title": "John Wick: Chapter 3 - Parabellum",
    "genre_ids": [
      28,
      80,
      53
    ],
    "title": "John Wick: Chapter 3 - Parabellum",
    "vote_average": 7.1,
    "overview": "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
    "release_date": "2019-05-17"
  },
  {
    "popularity": 125.701,
    "vote_count": 3553,
    "video": false,
    "poster_path": "\/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
    "id": 420817,
    "adult": false,
    "backdrop_path": "\/rVqY0Bo4Npf6EIONUROxjYAJfmD.jpg",
    "original_language": "en",
    "original_title": "Aladdin",
    "genre_ids": [
      12,
      35,
      14,
      10749,
      10751
    ],
    "title": "Aladdin",
    "vote_average": 7.1,
    "overview": "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
    "release_date": "2019-05-24"
  },
  {
    "popularity": 108.971,
    "vote_count": 223,
    "video": false,
    "poster_path": "\/zBhv8rsLOfpFW2M5b6wW78Uoojs.jpg",
    "id": 540901,
    "adult": false,
    "backdrop_path": "\/5GynP6w2OQWSbKnCLHrBIriF4Cw.jpg",
    "original_language": "en",
    "original_title": "Hustlers",
    "genre_ids": [
      35,
      80,
      18
    ],
    "title": "Hustlers",
    "vote_average": 6.2,
    "overview": "A crew of savvy former strip club employees band together to turn the tables on their Wall Street clients.",
    "release_date": "2019-09-13"
  },
  {
    "popularity": 106.276,
    "vote_count": 2006,
    "video": false,
    "poster_path": "\/cCTJPelKGLhALq3r51A9uMonxKj.jpg",
    "id": 320288,
    "adult": false,
    "backdrop_path": "\/ojVQv3qO5dL9kA7pk9KxpMi0ANO.jpg",
    "original_language": "en",
    "original_title": "Dark Phoenix",
    "genre_ids": [
      28,
      12,
      878
    ],
    "title": "Dark Phoenix",
    "vote_average": 6.1,
    "overview": "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
    "release_date": "2019-06-07"
  },
  {
    "popularity": 84.525,
    "vote_count": 109,
    "video": false,
    "poster_path": "\/5DSVYlKwEzGBxTkS95L73c3oxLs.jpg",
    "id": 530382,
    "adult": false,
    "backdrop_path": "\/eZKJ6Ez3DhVamz1CG1zwUpdwaAS.jpg",
    "original_language": "en",
    "original_title": "In the Shadow of the Moon",
    "genre_ids": [
      9648,
      878,
      53
    ],
    "title": "In the Shadow of the Moon",
    "vote_average": 6.1,
    "overview": "In 1988, Philadelphia police officer Thomas \"Locke\" Lockhart, hungry to become a detective, begins tracking a serial killer whose crimes defy scientific explanation. When the killer mysteriously resurfaces nine years later, Locke's obsession with finding the truth threatens to destroy his career, his family, and possibly his sanity.",
    "release_date": "2019-09-21"
  },
  {
    "popularity": 98.765,
    "vote_count": 570,
    "video": false,
    "poster_path": "\/fpe0eG2TBLJLQiqlhhvaWIfixXz.jpg",
    "id": 419704,
    "adult": false,
    "backdrop_path": "\/p3TCqUDoVsrIm8fHK9KOTfWnDjZ.jpg",
    "original_language": "en",
    "original_title": "Ad Astra",
    "genre_ids": [
      12,
      18,
      878
    ],
    "title": "Ad Astra",
    "vote_average": 6.3,
    "overview": "An astronaut travels to the outer edges of the solar system to find his father and unravel a mystery that threatens the survival of our planet. He uncovers secrets which challenge the nature of human existence and our place in the cosmos.",
    "release_date": "2019-09-20"
  },
  {
    "popularity": 102.293,
    "vote_count": 6,
    "video": false,
    "poster_path": "\/vS6TCG4HiUSCyX30f5wDGQDt1k3.jpg",
    "id": 428045,
    "adult": false,
    "backdrop_path": "\/6z2RYYKl2AAfVkOse7Uxh8TXHJa.jpg",
    "original_language": "ru",
    "original_title": "Тайна Печати дракона",
    "genre_ids": [
      12,
      14
    ],
    "title": "The Mystery of the Dragon’s Seal",
    "vote_average": 5.3,
    "overview": "The Russian Czar Peter the Great commissions Jonathan Green, an English traveller, to map the Far East territories of the Russian Empire. Green sets off on yet another long journey, full of unbelievable adventures, which eventually leads him to China. On his way, the famous cartographer makes breath-taking discoveries, meets mysterious creatures, Chinese princesses, deadly masters of oriental martial arts, and even Lun Van, the King of Dragons, himself. What could be more perilous than looking into the eyes of Viy? Only meeting him again… What will prevail this time — the unflinching scepticism of the scientist or ancient black magic, which has already gained influence over the Far East Lands?",
    "release_date": "2019-08-16"
  },
  {
    "popularity": 54.425,
    "vote_count": 18883,
    "video": false,
    "poster_path": "\/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
    "id": 118340,
    "adult": false,
    "backdrop_path": "\/kHex2XdOmGtazk1VfJjp4bl7BIc.jpg",
    "original_language": "en",
    "original_title": "Guardians of the Galaxy",
    "genre_ids": [
      28,
      12,
      878
    ],
    "title": "Guardians of the Galaxy",
    "vote_average": 7.9,
    "overview": "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
    "release_date": "2014-08-01"
  },
  {
    "popularity": 82.057,
    "vote_count": 29,
    "video": false,
    "poster_path": "\/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg",
    "id": 453405,
    "adult": false,
    "backdrop_path": "\/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg",
    "original_language": "en",
    "original_title": "Gemini Man",
    "genre_ids": [
      28,
      878,
      53
    ],
    "title": "Gemini Man",
    "vote_average": 5.9,
    "overview": "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
    "release_date": "2019-10-11"
  },
  {
    "popularity": 88.556,
    "vote_count": 10916,
    "video": false,
    "poster_path": "\/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
    "id": 245891,
    "adult": false,
    "backdrop_path": "\/iJlGxN0p1suzloBGvvBu3QSSlhT.jpg",
    "original_language": "en",
    "original_title": "John Wick",
    "genre_ids": [
      28,
      53
    ],
    "title": "John Wick",
    "vote_average": 7.2,
    "overview": "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
    "release_date": "2014-10-24"
  },
  {
    "popularity": 78.935,
    "vote_count": 2012,
    "video": false,
    "poster_path": "\/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
    "id": 466272,
    "adult": false,
    "backdrop_path": "\/kKTPv9LKKs5L3oO1y5FNObxAPWI.jpg",
    "original_language": "en",
    "original_title": "Once Upon a time... in Hollywood",
    "genre_ids": [
      28,
      35,
      80,
      18
    ],
    "title": "Once Upon a time... in Hollywood",
    "vote_average": 7.6,
    "overview": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    "release_date": "2019-07-26"
  },
  {
    "popularity": 89.957,
    "vote_count": 2678,
    "video": false,
    "poster_path": "\/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
    "id": 420818,
    "adult": false,
    "backdrop_path": "\/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
    "original_language": "en",
    "original_title": "The Lion King",
    "genre_ids": [
      28,
      12,
      16,
      18,
      10751
    ],
    "title": "The Lion King",
    "vote_average": 7.1,
    "overview": "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
    "release_date": "2019-07-19"
  }
]
class HomeScreen extends Component {
  state = {
    arrayMovie: [
      {}
    ]
  }

  navigatedetails = props => {
    console.log('props', props);
    props.history.push({ pathname: "/details", state: { name: "Ayrton lacerda", idade: "25 anos" } });
  }

  render() {
    return (
      <Container>
        <h1>home1</h1>
        <Carousel content={arrayTest} />
      </Container>
    )
  }
}

export default HomeScreen;