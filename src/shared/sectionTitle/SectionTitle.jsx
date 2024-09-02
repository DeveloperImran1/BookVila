
const SectionTitle = ({title, description}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-3  mb-[30px] ">
            <h1 className="text-[32px] font-bold ">{title}</h1>
            <p className="w-[70%] mx-auto">{description}</p>
        </div>
    );
};

export default SectionTitle;