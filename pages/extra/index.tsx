import Link from "next/link";
import Image from "next/image";
import cardImage from "../../public/images/snapn_cards.jpg";
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
}

export default function Extra({ allPostsData }: {allPostsData: {title: string, date: string, id: string}[]}) {
    return (
        <>
            <h1>EXTRAAA!!!</h1>
            <p>{allPostsData.length}</p>
            
            {allPostsData.map(({ id, date, title }, i) => (
                <>
                    <Link href={`/extra/${id}`} key={i}>
                        {title}
                        <br />
                        {date}
                        <br />
                        {id}
                    </Link>
                    <br />
                </>
            ))}

            {/* <Image src={cardImage} alt='Nice' /> */}
        </>
    )
}