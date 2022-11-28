import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <section className="py-5">
      <div className="container">
        <div className="blogs grid grid-cols-1 lg:grid-cols-2 gap-5 grid-flow-row-dense">
          <div className="lg:col-span-1 w-full flex flex-col gap-5">
            <div className="blog bg-white p-5 rounded ">
              <h2 className="font-bold text-slate-600 mb-3">
                What are the different ways to manage a state in a React
                application?
              </h2>
              <p className="text-sm text-gray-slate-600">
                State management is one of the most important aspects of every
                app. The app’s state dictates what users see, how the app looks,
                what data is stored, and so on. Thus it’s no wonder that there
                are so many open-source libraries designed specifically to make
                state management easier and more enjoyable.
              </p>

              <p className="text-sm text-gray-slate-600">
                We can manage our react app state using: useState useReducer
                useMemo & useCallback useEffect useRef Context and Custom Hooks
                React Query & React Location Zustand Valtio Jotai Redux
              </p>
            </div>
            <div className="blog bg-white p-5 rounded ">
              <h2 className="font-bold text-slate-600 mb-3">
                How does prototypical inheritance work?
              </h2>
              <p className="text-sm text-gray-slate-600">
                Every object with its methods and properties contains an
                internal and hidden property known as [[Prototype]]. The
                Prototypal Inheritance is a feature in javascript used to add
                methods and properties in objects. It is a method by which an
                object can inherit the properties and methods of another object.
                Traditionally, in order to get and set the [[Prototype]] of an
                object, we use Object.getPrototypeOf and Object.setPrototypeOf.
                Nowadays, in modern language, it is being set using __proto__.
              </p>
            </div>
            <div className="blog bg-white p-5 rounded ">
              <h2 className="font-bold text-slate-600 mb-3">
                What is a unit test? Why should we write unit tests?
              </h2>
              <p className="text-sm text-gray-slate-600">
                Unit Testing is a type of software testing where individual
                units or components of a software are tested. The purpose is to
                validate that each unit of the software code performs as
                expected. Unit Testing is done during the development (coding
                phase) of an application by the developers. Unit Tests isolate a
                section of code and verify its correctness. A unit may be an
                individual function, method, procedure, module, or object.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1 w-full">
            <div className="blog bg-white p-5 rounded ">
              <h2 className="font-bold text-slate-600 mb-3">
                React vs. Angular vs. Vue?
              </h2>
              <p className="text-sm text-gray-slate-600 mb-2">
                Angular, React and Vue are all highly popular JavaScript
                libraries and frameworks that help developers build complex,
                reactive and modern user interfaces for the web. Actually, with
                additional libraries like React Native, Ionic (with Angular or
                with React) or NativeScript you can even build native mobile
                apps for mobile devices with help of Angular, React and Vue.
              </p>

              <p className="text-sm text-gray-slate-600 mb-2">
                Angular definitely is the "biggest" framework of the three. It's
                sometimes even called a "platform" rather than a framework. Why?
                Because Angular out of the box includes support for a lot of
                things. It helps you (= the developer) with controlling the UI,
                reacting to user input, validating user input in forms, routing,
                state management sending Ajax Http requests, providing offline
                support & PWA capabilities, testing, building your application,
                managing multiple applications and connecting them and much,
                much more!
              </p>
              <p className="text-sm text-gray-slate-600 mb-2">
                React is totally different! Where Angular gives you everything,
                React gives you only one thing: A library for rendering content
                to the DOM and controlling it efficiently thereafter. It's also
                all about components and all about building user interfaces from
                components. It also gives you all the "tools" you need to define
                what should be rendered in which way under which circumstances.
              </p>
              <p className="text-sm text-gray-slate-600">
                Vue is a framework which kind of sits between React and Angular.
                It's not as "big" as Angular but it definitely includes more
                features than React does. Vue does give you built-in state
                management and it also ships with a built-in router. It does,
                however, not include form validation or Http client
                functionalities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
