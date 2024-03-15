import Student from "./Student";

function Content() {
    const students = [
        { name: "Jelu Mari Cajipe", email: "jjelumari@gmail.com", picture: "https://imagevars.gulfnews.com/2010/8/7/1_16a07fbf5ee.665173_3655806653_16a07fbf5ee_medium.jpg" },
        { name: "Joshriel Mive Carzon", email: "joshymive@gmail.com", picture:"https://www.rollingstone.com/wp-content/uploads/2023/08/ken-song.jpg?w=1581&h=1054&crop=1" },
        { name: "Angel Dorothy Medez", email: "angeladorothea@gmail.com", picture: "https://yt3.googleusercontent.com/ytc/AIdro_lR5S2lIRVRNw1Ay-1uYII9gFftoVVh-6hfnUbV=s900-c-k-c0x00ffffff-no-rj" },
        { name: "Rizal Liwa", email: "rizalliwa17@gmail.com", picture:"https://aphrodite.gmanetwork.com/entertainment/articles/900_675_10__20210310174033.jpg" }
    ]

    return (
        <div class="contents">
            {students.map((student, index) => (
                <Student 
                    key={index} 
                    name={student.name} 
                    email={student.email}
                    picture={student.picture} />
            ))}
        </div>
    );
}

export default Content;
