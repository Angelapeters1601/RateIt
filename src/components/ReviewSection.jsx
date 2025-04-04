import Sections from "./Sections";
import skincareData from "../mockApi/skincareData";
import haircareData from "../mockApi/haircareData";
import makeupData from "../mockApi/makeupData";
import fragranceData from "../mockApi/fragranceData";

function ReviewSection() {
    const categories = [
        { title: "Skincare", data: skincareData },
        { title: "Haircare", data: haircareData },
        { title: "Makeup", data: makeupData },
        { title: "Fragrances", data: fragranceData },
    ];

    return (
        <div>
            <div>
                <h3 className="font-bold font-mono text-2xl 
                mx-auto text-center text-stone-800 bg-gray-100 
                py-5 w-70">
                    Reviews from Experts
                </h3>
                <p className=" font-mono py-5
                 text-stone-700 font-light leading-loose text-sm">
                    The editor reviews offer a deep dive into the product, providing thoughtful insights on its features, performance, and overall value. They give readers a well-rounded perspective by discussing both the strengths and potential drawbacks, helping consumers make more confident and informed decisions before making a purchase. These reviews often reflect real-world usage and are written with the intent to guide shoppers toward the best choices based on their individual needs.
                </p>
            </div>
            <main>
                {categories.map((category) => (
                    <Sections key={category.title} title={category.title} data={category.data} />
                ))}
            </main>
        </div>
    );
}

export default ReviewSection;
