const data = [
  {
    id: 1,
    com: "25k",
    title: "Completed Cases",
    des: "We always provide people a complete solution upon focused on any business",
  },
  {
    id: 2,
    com: "10+",
    title: "Our Office",
    des: "We always provide people a complete solution upon focused of any business",
  },
  {
    id: 3,
    com: "86+",
    title: "Skilled People",
    des: "We always provide people a complete solution upon focused of any business",
  },
  {
    id: 4,
    com: "28+",
    title: "CHappy Clients",
    des: "We always provide people a complete solution upon focused of any business",
  },
];

const Classes = () => {
  return (
    <div className="flex flex-wrap mt-10">
      {data.map((item) => (
        <div
          key={item.id}
          className="h-[200px] w-[250px] ml-24  flex flex-col items-center justify-center bg-white"
        >
          <h1 className="text-5xl font-bold text-blue-600">{item.com}</h1>
          <p className="text-lg font-semibold text-gray-700">{item.title}</p>
          <p className="text-sm text-gray-500 text-center mt-2">{item.des}</p>
        </div>
      ))}
    </div>
  );
};

export default Classes;
