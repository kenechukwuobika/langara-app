import Heading from "../../components/Heading";
import Member from "../../components/Member";

const Team = () => {

    const arr = [
        {
            name: "Albert Wong",
            title: "phD",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quam laboriosam eos optio fugiat totam maxime accusamus? Quisquam totam blanditiis veniam, excepturi architecto sunt expedita veritatis voluptas voluptate quaerat ducimus."
        },
        {
            name: "Albert Wong",
            title: "phD",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quam laboriosam eos optio fugiat totam maxime accusamus? Quisquam totam blanditiis veniam, excepturi architecto sunt expedita veritatis voluptas voluptate quaerat ducimus."
        },
        {
            name: "Albert Wong",
            title: "phD",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quam laboriosam eos optio fugiat totam maxime accusamus? Quisquam totam blanditiis veniam, excepturi architecto sunt expedita veritatis voluptas voluptate quaerat ducimus."
        },
        {
            name: "Albert Wong",
            title: "phD",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quam laboriosam eos optio fugiat totam maxime accusamus? Quisquam totam blanditiis veniam, excepturi architecto sunt expedita veritatis voluptas voluptate quaerat ducimus."
        },
        {
            name: "Albert Wong",
            title: "phD",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quam laboriosam eos optio fugiat totam maxime accusamus? Quisquam totam blanditiis veniam, excepturi architecto sunt expedita veritatis voluptas voluptate quaerat ducimus."
        },
        {
            name: "Albert Wong",
            title: "phD",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quam laboriosam eos optio fugiat totam maxime accusamus? Quisquam totam blanditiis veniam, excepturi architecto sunt expedita veritatis voluptas voluptate quaerat ducimus."
        },
        {
            name: "Albert Wong",
            title: "phD",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quam laboriosam eos optio fugiat totam maxime accusamus? Quisquam totam blanditiis veniam, excepturi architecto sunt expedita veritatis voluptas voluptate quaerat ducimus."
        },
        {
            name: "Albert Wong",
            title: "phD",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quam laboriosam eos optio fugiat totam maxime accusamus? Quisquam totam blanditiis veniam, excepturi architecto sunt expedita veritatis voluptas voluptate quaerat ducimus."
        },
    ];
    

    return(
        <div className="">
            <div className="container">

                <div className="heading__center">
                    <Heading
                        text="Meet the Team"
                    />
                </div>

                <div className="row-xl">
                    {arr && arr.map(item => (
                        <div className="col-3">
                            <Member 
                                name={item.name}
                                title={item.title}
                                description={item.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team;