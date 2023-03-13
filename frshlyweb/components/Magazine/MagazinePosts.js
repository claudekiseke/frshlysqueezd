// get all medium users


// get posts from medium users
const username = `lailanassali`;
const RSSUrl = `https://medium.com/feed/@${username}`;
const RSSConverter = `https://api.rss2json.com/v1/api.json?rss_url=${RSSUrl}`

const getMediumData = async () => {
    const response = await fetch(RSSConverter);
    const data = await response.json();
    return data.items;
}
getMediumData();

const post = getMediumData().map((item, index) => {
    const author = item.author;
    const content = item.content;
    const link = item.link;
    const title = item.title;

    return (
        <div key={index}>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <div>{content}</div>
        <a href={title}>Link to original article</a>
        </div>
    )
})

export default function MagazinePosts() {
    return (
     <div>
         {/* {getMediumData()} */}
         purr
     </div>
    )
}