# Rick and Morty GraphQL App

I made this app with **NextJS**, as it is a framework I've already worked with, and contains similar features as **Gatsby**, but without all the boilerplate and plugins mess that **Gatbsy** has.

One of the good things about **NextJS** is that it generates the routes automatically, so one thing less to take care.

For the styling, I chose **styled-components**, a *CSS-in-JS* library, as it makes it super easy to control styles and overwrite them.

As I wanted the app to be *simple and clean*, there is only 5 colors, **white, black, orange, pink and blue.**

I have used **flex-box** and **media queries** to make the app responsive.

As **NextJS** supports *Server-Side Rendering* and I wanted to take advantage of that, I had to export my Apollo Client in a file, so then I could use the method **getServerSideProps()** from **NextJS**, which would fetch the data before the page is rendered. And as it is not a **React** function, a *hook* couldn't be called there, so **useQuery()** nor **useLazyQuery()** could be used, the **Apollo Client** had to be used there.

For the listing of the types, I chose a package called `react-infinite-scroll-component`, which helped me having a list with a superb performance and that automatically fetches the next items.

I always tend to pick **SVG** before images, as they are better for the performance and more manipulable. If this were a page with a lot more pics, it would have required *lazy loading* them, but for now, as they are always on the viewport, it would not change anything.

As you could see, the layout is the same for every singular item (example. */location/12*) than it is for the lists (example. */episode*). Here I had a debate, to choose between *clean code* and try to make a **Generic component**, or keep each one with their files. I kept the last one, as I think for a **Technical Test**, *code readability* is more important that *code duplication*, I repeat, in a **production** case scenario this would not be my choice, but here it is.

Finally, the way I organize files is:

- components: Normally I do a 1:1 relation with the *pages*, so if I have a page that is called **Customer**, a **Customer component** will be inside here, this is to avoid having logic in the *pages* part. If Customer have Sub-components, they will go in different files but under the Customer folder. If there are components being used in more than one page, it should be in *shared* folder.

- pages: Here I put all the pages I need **NextJS** to render for me.

- queries: Place where all the queries belong, so if we need to edit them, we know where to find them.

- services: In this case we only have the **ApolloClient**, but if this App needed to consume another service, the logic of that service would belong here.

- styles: Default and normalized global styles for our app.