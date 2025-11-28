---
title: "How I Won My First Game Jam"
pubDate: 2025-11-28
description: "I did not procrastinate this time!"
heroImage: "../../assets/blog-placeholder-2.jpg"
tags: ["gamedev", "unity", "gamejam"]
---

## Prelude
I had started programming in 2021, and loved it since, and made some very basic projects. Most of these projects focus on gamedev, but none of them are _proper_, and most are not even fully finished. I have participated in some game jams before, but have only got to submitting to one or two, and not winning any.

But my life was about to be changed forever.   


## The new beginning
It's the July of 2024, and I have discovered [Arcade](https://hackclub.com/arcade/) through the GitHub Education Newsletter, and am participating in it.

<div style="display: flex; gap: 1rem; margin: 2rem 0;">
  <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/a870be84e790f5ddfbcbb41873480d1ac3186e85_chrome_m4zaltbtp2.png" alt="Arcade-1" style="width: 50%; height: auto;">
  <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/b21e3dddbb4b02e10a9620e072da6b0cac2d2355_chrome_2ytzwdut4k.png" alt="Arcade-2" style="width: 50%; height: auto;">
</div>

Then at the start of August, the **Arcade Jam** is announced.

![](https://hc-cdn.hel1.your-objectstorage.com/s/v3/5715612f3dd2387a289fddfe9e9bae3120577a1b_chrome_eudj1u6a1q.png)
And I decide to take part.

During the next 24 hours, everyone submits an idea for the theme, and then voting opens up to decide the theme.

## The theme
Finally, after a wait of 3 days, the theme is announced.

![](https://hc-cdn.hel1.your-objectstorage.com/s/v3/3ca784f303ddc4f2fbfba95c564873a3e1298aaf_chrome_pvkfoiacgq.png)

**Loopholes**!

I am super excited because this is a great theme, and immediately start brainstorming.

After a lot of notes and sketches, **this is what I come up with**:

> You are trapped in a simulation with a world full of bugs and glitches. To escape, you must exploit these flaws to reach a hidden underground area. Your journey involves navigating through challenges, discovering secrets, and manipulating the environment to your advantage.

Or **basically**:

You are a box, trapped in a maze full of obstacles, but the obstacles are really easy to cross, because they are filled with bugs (think walls with no coliders... etc).

And then I ~~immediately start working on it~~ **_procrastinated_**. _For the next **full** week_.

## Awakening
With only a week left till the end of the jam, I finally convinced myself to start working on my game.

First I made a cube. And then I made and attached a PlayerController script to it. Aaand I had my player.

Then I watched some tutorials (_[Brackeys](https://www.youtube.com/channel/UCYbK_tjZ2OrIZFBvU6CCMiA)_), and learned ProBuilder.

After mastering ProBuilder (_watching one tutorial_), I got to work with the level designing. That was pretty easy. I just made whatever came to my mind. Oh and of course I also added a pool. A pool that you can walk on, because why not.

![](https://hc-cdn.hel1.your-objectstorage.com/s/v3/09a4e4b7fbbcb8d623b2907cc82d19994494560e_chrome_oh5h0m8ri1.jpg)

Then I polished all of the levels I had designed, and joined them all! This is where I had to get creative. So I added some hallways, fake walls, some interactive boxes, more fake walls, and there, I had my simulation world!

Now came the time to code the logic. I already had my player controller. So I scrapped together some scripts for interactions, collision logic etc. 

And then I also added a menu screen with a bit of text (with _really_ bad styling) and a play button, and a game over screen.

And I think that was it.

Yeah, I did not add any sfx or music. I hadn't added any audio to any of my projects before. I think I realised after this game from the feedback I received that I should add audio/sfx/music to stuff.

## Submitting and Voting
Ok so all of the stuff I did in the last section happened in the span of the full week. So like now I had to submit my game. So I exported a WebGL build from Unity, troubleshot why it didn't work on my github pages site, found the solution, and got the game working on the web! Yayy! Then I improved the game's GitHub repository, and made the README just a teeny tiny bit better (so now it contained the game's title, description, controls, and URL, compared to just the game's title before).

Oh and I also thought up of a cool name for the game!

**Glitch Out**!