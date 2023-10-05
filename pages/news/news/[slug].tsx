/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import NewsEvent from "../../../components/ui/atoms/types";
import { useRouter } from "next/router";
import Error from "next/error";

const ReadMoreNews= ({ job }: { job: NewsEvent }) => {
  const router = useRouter();
  if (!job) {
    return <Error statusCode={404} />;
  }
  const paragraphs = job.description.split(/\n\s*\n/);
  return (
    <Layout title="ReadMore">
      <main className="flex justify-center">
        <div className="w-3/4 my-12">
          <div className="flex w-full bg-primary">
            <div className="flex md:w-1/2 w-full justify-center items-center">
              <h2 className="text-center text-white">
                {job.title}
              </h2>
            </div>
            <div className="md:w-1/2 w-full h-full">
              <img
                src={job.imageUrl}
                alt={job.title}
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center w-full px-4">
          <div className="w-3/4 px-4">
          <hr className="w-[75px] h-1.5 bg-primary my-4" />
            {paragraphs.map((paragraph, index) => (
            <p key={index} className="my-4 font-normal text-justify">
              {paragraph}
            </p>
          ))}
          </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
export default ReadMoreNews;

interface Params {
  slug: string;
}
export async function getServerSideProps({ params }: { params: Params }) {
  const { slug } = params;
  const foundJob = newsData.find((job) => job.slug === slug);
  if (foundJob) {
    const job = {
      title: foundJob.title || "",
      date: foundJob.date || "",
      description: foundJob.description || "",
      imageUrl: foundJob.imageUrl || "",
      slug: foundJob.slug || "",
    };

    return {
      props: {
        job,
      },
    };
  }

  // If no job is found, return a 404 page
  return {
    notFound: true,
  };
}

const newsData: NewsEvent[] = [
  {
    title: "GHA deploys G Suite for Education for online learning",
    date: "Dec 12 2023",
    description: `On Monday, September 7, 2020, Green Hills Academy started the 2020/2021 school year with online learning. We deployed G Suite for Education to enhance distance learning, collaboration, and communication. G Suite for Education includes Google Classroom, Assignments, and Forms for teaching and learning; Google Drive, Docs, Slides, and Sheets allowing educators and learners to co-create and edit in real-time; Gmail, Meets, and Chat for communication; and Google Calendar.\n\n”G Suite and online learning is such a different experience from the traditional classroom environment. It breaks the boundaries of a classroom and allows learners to express themselves freely,” says Flavia Owambo, Middle School Principal.\n\nIt improves learning and engagement, and helps learners do their best work with simple tools that support learning. Educators easily create and organize coursework and assignments, assess learners’ progress and give feedback on their work. ”What is interesting is that my son is much more enthusiastic during online lessons than ever before! He loves Meet sessions,” notes a parent.\n\nGoogle Meet connects learners and educators to teach and learn from anywhere. Educators say that G Suite for Education has helped them enhance their skills in the different tools and they appreciate that Google Meet sessions can accommodate more learners and they easily manage the classrooms. “I find G Suite very efficient and easy to use,” says Enock Rutaganda, a Grade 12 learner.\n\nThe Xanax – or alprazolam is all over the place. At the doctor-on the street-What do you need to know about it? He goes over how it works, doses, comparison, withdrawal, basically all the stuff you would be stupid not to learn, the xanax is an amazing drug! The drug has helped me A LOT, it did wonders for me for what I needed, but when I decided to quit taking these! Check out Sites honest opinions about Xanax – alprazolam in https://diamonds.com/online-xanax/.\n\nApproximately 80 million educators and learners around the world use G Suite for Education and 40 million rely on Google Classroom to stay organized and support creative teaching techniques.\n\n“I’m writing this letter in appreciation of you and all the Teachers who are working hard to make online teaching go smoothly. Today seeing Mr.Hannington teach his geography lesson for 10C made me appreciate the effort he had put in, to reach out to the learners. He taught them on a whiteboard and I think that’s coming as close as possible to a true classroom experience. And my son Shayan Prabhu  enjoyed his class immensely. It’s my heartfelt thanks to you and to all the teachers like him who work so hard to make things go right,” wrote a parent.`,
    imageUrl: "/images/virtual.png",
    slug: "deploy_virtual",
  },
  {
    title: "Virtual Nursery Parents Night",
    date: "Dec 12 2023",
    description: `On Friday 28th August, 2020, the Nursery Principal, Ms. Carmel Faulkner held a virtual Parents Night with current and prospective nursery parents. At Green Hills Academy, we recognize parents are their child’s first, continuous and most important educator. We also understand that balancing home schooling, work and family commitments during the COVID closure is a huge challenge. Our nursery ‘at home learning’ aims to provide practical activities that help to engage young children in learning skills and developing characteristics that will support their lifelong learning journey. We encourage the use of materials that are easily found in the home or the natural environment. Daily virtual online meetings with their teachers and friends are a fun interactive way to learn, maintain relationships, develop language and feel connected to school.\n\nFor more information about the Parents Night virtual meeting, please visit the following link https://docs.google.com/presentation/d/1JLwzARyc2s-FjsfO27u6zi2FF9ygM0PHDsvmfpJ56QU/edit?ts=5f4e82bc#slide=id.ge9090756a_1_267`,
    imageUrl: "/images/parental.png",
    slug: "parental_night",
  },
  {
    title: "You have what it takes to make the world a better place, First Lady tells Green Hills graduates      ",
    date: "Dec 12 2023",
    description: `First Lady Jeannette Kagame has urged Green Hills Academy 2020 graduates to take the lead in renovating and building a new world in the face of Covid-19 pandemic that has rattled global order.
    \n\n
    Mrs. Kagame was giving remarks during a virtual graduation ceremony that took place on Monday, July 6th. She expressed her confidence that the school has prepared them well to independently navigate the world. “As young adults with open minds and big dreams, the responsibility to renovate and build the new world is in your hands,” she said. She added; “I am more than confident that you have what it takes”.
    \n\n
    She also commended the students’ effort to adjust to the new normal and unforeseen challenges that the pandemic has brought and the ceremony is a testimony that they succeeded. “Covid-19 pandemic presented unforeseen challenges and we commend your adjustment capability,” she said. The First Lady is a Founding Member of Green Hills Academy. Besides Rwandan students, Green Hills Academy accommodates international students from 56 countries.`,
    imageUrl: "/images/firstlady.png",
    slug: "what_it_takes",
  },
  {
    title: "Green Hills Academy trains teachers on the role of play in early childhood",
    date: "Dec 12 2023",
    description: `On Tuesday, Nursery School teachers at Greens Hills Academy, Nyarutarama and around Kigali converged at the School’s premises for a conference that aimed at training teachers, teaching assistants and leaders, about the essence of play in early childhood.
    \n\n
    The conference was under a theme, “The right to play in school.”
    \n\n
    Carmel Marie Faulkner, the Principal of Nursery School, Green Hills Academy, pointed out, the purpose of the conference was to promote the importance of play in early childhood, from zero to eight years, within communities and schools.
    \n\n
    She noted that the reason behind the theme was because, for the last 12 months, the country has got a lot of initiates, working with parents and local communities to develop parenting curriculum, where play was more frequently coming up in conversations. “As a school, we realized that research shows how important play is.”
    \n\n
    Faulkner enlightened, often, the center of focus in Preschools, is academics but not play, for the purpose of promoting play, Green Hills reached out to the local community to take part in the conference, where Teach Rwanda (an Organization that establishes preschools in Rwanda to offer young children engaging learning experiences) volunteered to facilitate and share their
    \n\n
    She also noted, children develop most of their thinking capacities at the age of three, and then at five. Any positive intervention given to them has a long-lasting effect on them.
    \n\n
    I am balding, I am 22. I am planning on taking propecia for the rest of my life. I cant live life without my hair. I dont care about the side affects. Im welcoming them if i get them. I dont care. I just want my hair. Cutting my Proscar 5mg Finasteride tablets in 4 pieces or 8 pieces using a laboratory digital scale. Few about Propecia https://mysticquote.com/our-quote-order-propecia/.
    \n\n
    This conference was aimed at boosting the confidence of teachers, in the message they will convey to parents. With time, parents will also be invited to take part in a conference still about play, on the dates that will be communicated, Faulkner said.
    \n\n
    She explained that a playful environment starts with the teachers, they are responsible for preparing a safe place for kids to play from, but also support, and establish an environment that allows play. This environment should enable the child’s emotional, physical and communication development.
    \n\n
    Some of the education experts emphasized that play helps kids discover a lot of things, make sense of the world they live in, interact with one another, express and control emotions and also develop the symbolic and problem-solving abilities.
    \n\n
    “This conference was extremely educative, we got to learn so much that we didn’t know yet we deal with these little ones every day. Some of the take-home points were; play helps children expand their vocabulary as they are exposed to different games, and conversations,” said Elyse Ishimwe, a Nursery teacher at Greens Hills Academy.
    \n\n
    She also explained that it is through play that children take risks and learn from them, practice what they see in their environment, come up with their ideas without being guided.
    \n\n
    When it comes to playing, Ishimwe noted that it is everyone’s responsibility to provide a safe playful environment that is harmless to the children, this means doing away with sharp objects, or chemicals that can be dangerous to their lives.
    \n\n
    She stressed a playful based environment is often chaotic, messy and loud, that why children need to play from a space where they are not given the dos and don’ts while playing because they might get bored. This she said, doesn’t limit parents or teachers to guide or check on kids while playing.
    \n\n
    According to Janet F.Brown, an early childhood teacher and founder of Teach Rwanda, play has been demonstrated as a way kids learn, it is not proper to play if kids are directed on what to play, they rather, need to make choices of who to play with, which game to play, what time to play and for how long.
    \n\n
    She stated, play is the foundation of everything, even human development starts before the baby is born, that is why pregnant women communicate very well with their babies in their womb. By the time they give birth, they have already bonded.
    \n\n
    Brown further said play is a way children explore since they want to discover how things work. They even go the extra mile of memorizing everything they have learned or seen.
    \n\n
    “Kids need to have classrooms, to play from. If a school doesn’t allow kids to have time to play, it is damaging their brains,” she said.`,
    imageUrl: "/images/ghatraining.png",
    slug: "gha_training",
  },
];
