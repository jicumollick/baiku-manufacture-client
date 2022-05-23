import React from "react";

const Blogs = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "lightcyan" }}>
      <h2 className="primary-color pb-5">Welcome to Our Blog</h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1) How will you improve the performance of a React Application?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                To improve the performance of a react app, we have to focus on{" "}
                <strong>reducing unnecessary props</strong>, have to use{" "}
                <strong>Lazy Loading in images</strong>, we have to reduce the
                number of <strong>Inline function call</strong> , have to{" "}
                <strong>reduce re-rendering of components</strong> as much as
                possible.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2) What are the different ways to manage a state in a React
              application?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                {" "}
                To manage a state in react app, we can use{" "}
                <strong>React Hooks</strong> likes useState(), We can Use a
                library called <strong> Redux </strong> to manage the states, we
                can use <strong> Context Api</strong> as well to manage a state.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3) How does prototypical inheritance work?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                {" "}
                It's a method to take the access of another object using
                prototype . the syntax is{" "}
                <strong> ChildObject.__proto__ = ParentObject </strong>. first,
                you have to declare two objects. 1) parent 2) child . Then you
                have to declare the __proto__ in child object using{" "}
                <strong> __proto__ </strong>. then child obejct will get all the
                access of parent object. That's called prototypical inheritance.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              4) Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Instead of setting the products value directly , we are taking
              help of a <strong> React Hook Function </strong>. Because A hook
              function like setProducts can be <strong> Reused </strong> on many
              components in many times.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              5) You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <code>
                {" "}
                {`
           
  const searchText = "peyaj";
  const products = [
    {
      name: "soyabin",
      price: 120,
      description: "i am soyabin",
    },
    {
      name: "peyaj",
      price: 64,
      description: "I am peyaj baba",
    },
    {
      name: "tormuj",
      price: 50,
      description: "I am tormuj",
    },
  ];

  const result = products.filter((product) => product.name === searchText);
  console.log(result);
`}
              </code>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSix">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              6) What is a unit test? Why should write unit tests?
            </button>
          </h2>
          <div
            id="collapseSix"
            class="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Unit Test is a type of test that is write and run by software
              developer to ensure a <strong> particular section </strong> of a
              software meets design behaves as expected. We should definitely
              write unit test to test each part of a software is working
              accoridingly to the documentation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
