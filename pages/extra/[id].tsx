import { getAllPostIds, getPostData } from "@/lib/posts";

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: {params: {id: string}}) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }: {postData: {title: string, id: string, date: string, content: string}}) {
    return (
        <>
            <div>
                {postData.title}
                <br />
                {postData.id}
                <br />
                {postData.date}
            </div>
            <hr />
            <div dangerouslySetInnerHTML={{__html: postData.content }}></div>
        </>
    );
}
