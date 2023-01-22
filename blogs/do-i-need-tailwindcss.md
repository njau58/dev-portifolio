---
title: 'Is TailwindCSS worth it?'
date: 'June 2, 2022'
excerpt: 'One of the newer technologies which gets a lot of attention these days is Tailwind CSS. When I first heard about it, I was immediately interested because of my natural inclination towards the front end world.'
cover_image: '/images/blogs/tailwind.jpg'
author: 'Simon Njau'
author_profile: '/images/blogs/simon.jpg'
category: 'web technology'
---


<style>


p{
  
    margin-bottom:2rem;
    font-size:1em;

  
     line-height: 2;
}
h2{
 
      font-size:1.5rem;
    font-weight:bolder;
      margin-bottom:0.5rem;
    

}
ol {

  font-weight: bold;
  font-size:1.2rem;
   list-style-type: decimal;
}



</style>
Tailwind is a utility-first framework that can be used to make any design in your markup. These utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.

The front end community is constantly coming out with new technologies to make our daily work easier. These creators undoubtedly deserve some praise, but before hopping on any bandwagon or utilizing a hot technology, we should weigh the benefits and drawbacks.
## Pros of Tailwind

1. Responsive everything.

Dealing with a bunch of complex media queries in your CSS sucks, so Tailwind lets you build responsive designs right in your HTML instead.

Throw a screen size in front of literally any utility class and watch it magically apply at a specific breakpoint. Its not magic really, you can configure these break-points to your desire.

2.  Styling process is much faster.

Undoubtedly, Tailwind helps you style your HTML elements much faster. Since you don’t have to leave your markup, you can practically style your elements directly. You can create nice layouts in a much shorter time than doing it using the traditional CSS approach. We all want to save time, right? Sigh.



3. It provides security.

This is true for any tested framework which people safely use in production. Since it is tested and the framework is stable, you can use it and feel secure that things won’t break. Also, since you’re backed up with a framework created by experienced engineers, they got you covered if any issue arises in the framework.

4. It’s tiny — never ship unused CSS again.

Tailwind automatically removes all unused CSS when building for production, which means your final CSS bundle is the smallest it could possibly be. In fact, most Tailwind projects ship less than 10kB of CSS to the client.


5. Tailwind is not opinionated.

Imagine you not having to conform to a certain theme or that border-radius of a button? This distincts tailwind from  other frameworks while making the process of developing a design system seamless.

## Cons of Tailwind
1. Your markup becomes very verbose.

If you've seen how Tailwind is often used, you'll know that you provide the HTML elements a number of Tailwind classes that are in charge of the styling. It goes against the "separation of concerns" idea and is not a natural approach to handle CSS.

2. You may have to work yourself around the framework at times.

You might go right into this one as well. If your specific use case isn't covered by the documentation, you might have to make a few changes and tweaks to the framework to make it work for you. In essence, Tailwind will become your own custom framework.

3. It’s a crutch for developers who don’t know CSS well.

A competent frontend developer need to feel at ease designing CSS from scratch and even coming up with their own framework. You risk losing control of your styling and being unable to troubleshoot any problems if you rely on a framework to do all the labor-intensive tasks for you without truly understanding what is occurring in the background.

4. It takes time to become productive with it.

Of fact, every framework involves a trade-off in this regard. But the fact remains that it will take time to use a new framework productively.


I suppose that in this case, personal preference is everything. Go for it if you're ready to put in the time to master the framework and ultimately speed up your CSS style.

## Final thoughts

Maintaining CSS has never been simplified, a matter of fact is you’re never going to believe me until you actually try it.
If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.

