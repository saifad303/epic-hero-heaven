import React from "react";
import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <Helmet>
        <title>Epic Hero Heaven | Blogs</title>
      </Helmet>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-slate-700 dark:text-white">
          ReactJS interview QnA
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-5 ">
          <div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </h3>
              <p className="text-gray-500 dark:text-gray-400 my-5">
                <strong className=" text-slate-700">Access tokens</strong> play
                a crucial role in token-based authentication by granting
                applications permission to access an API. Once a user completes
                the authentication and authorization process, the application
                receives an access token. This access token is then utilized as
                a credential when making requests to the targeted API. By
                passing this token, the API recognizes that the token bearer has
                been granted authorization and can perform actions based on the
                specified Scope granted during authorization.
              </p>
              <p className="text-gray-500 dark:text-gray-400 my-5">
                <strong className=" text-slate-700">Refresh token</strong>{" "}
                serves as a unique token used for acquiring additional access
                tokens. Its purpose is to enable the retrieval of new access
                tokens without requiring the user to provide credentials each
                time an access token expires. This mechanism allows for the
                usage of short-lived access tokens while maintaining a seamless
                user experience.
              </p>
              <p className="text-gray-500 my-5">
                <strong className=" text-slate-700">
                  How refresh token access works:{" "}
                </strong>{" "}
                Access and refresh tokens work together in token-based
                authentication. The access token is used to authenticate and
                authorize API requests. It is included with each request,
                allowing the user to access protected resources. If the access
                token expires, the refresh token comes into play. The refresh
                token is used to obtain a new access token without requiring the
                user to re-enter their credentials. This ensures a seamless user
                experience while maintaining security.
              </p>
              <p className=" my-6 text-lg font-bold text-slate-700">
                We can store the token in a cookie with the following three
                flags:
              </p>
              <ul className=" text-slate-600">
                <li>1. Secure: transmit over https</li>
                <li>
                  2. HttpOnly: client-side JS cannot read it (XSS protection)
                </li>
                <li>3. SameSite (either Lax or Strict): CSRF protection</li>
              </ul>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Compare SQL and NoSQL databases?
              </h3>
              <p className="text-gray-500 ">
                1. <strong>SQL</strong> or relational models are particularly
                well-suited for handling structured data. Structured data,
                organized in a tabular format with columns and rows, lends
                itself to effortless searching and analysis.{" "}
                <strong>NoSQL</strong> models are a suitable choice when dealing
                with loosely structured data since they do not require a
                predefined schema to analyze the data effectively.
              </p>
              <br />
              <p className="text-gray-500 ">
                2. <strong>SQL</strong> systems offer simplicity in data
                querying as they rely on a single language. Due to their
                long-standing presence, the SQL language has remained relatively
                stable over time. This stability makes it easier for team
                members, including those with limited technical expertise, to
                grasp and use effectively. <strong>NoSQL</strong> systems
                present a slightly higher level of complexity when executing
                queries. Due to the absence of a standardized query language, it
                is advisable for your team to collaborate with a developer or an
                individual with a deeper understanding of information technology
                to handle data queries effectively.
              </p>
              <br />
              <p className="text-gray-500 ">
                3. The <strong>SQL</strong> storage model is a table with fixed
                rows and columns, which programmers refer to as a relational
                database. <strong>NoSQL</strong> databases offer various storage
                models, encompassing the key-value model, column storage,
                document database, and graph database. These diverse models
                provide flexibility in choosing the most suitable approach for
                storing and retrieving data in a NoSQL database.
              </p>
            </div>
          </div>
          <div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                What is express js? What is Nest JS?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                <strong>Express.js</strong> also known as Express, is a popular
                back-end web application framework. It specifically focuses on
                constructing RESTful APIs using Node.js and is freely available
                as open-source software under the MIT License. Express is
                purpose-built for developing web applications and APIs, and it
                has gained recognition as the go-to server framework for Node.js
                applications.
              </p>
              <br />
              <p className="text-gray-500 dark:text-gray-400">
                <strong>NestJS</strong> is a widely used open-source back-end
                framework designed for developing server-side applications using
                Node.js and TypeScript. It aims to establish a robust foundation
                for building server-side applications by incorporating
                established patterns and best practices from renowned frameworks
                like Angular and Express.js. With NestJS, developers can
                leverage familiar concepts and industry-proven techniques to
                create high-quality server-side applications.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                What is MongoDB aggregate and how does it work?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Aggregation operations provide a versatile set of capabilities
                for grouping, sorting, performing calculations, and analyzing
                data in diverse ways. These operations offer flexibility and
                empower you to derive meaningful insights, gain deeper
                understanding, and extract valuable information from your
                datasets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
