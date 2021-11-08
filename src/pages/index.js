import React from "react";
import Layout from "../components/layout";

import firebase from "gatsby-plugin-firebase";

import { graphql, useStaticQuery } from "gatsby";

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);
  React.useEffect(() => {
    firebase
      .firestore()
      .collection("test")
      .get()
      .then((snapshot) => {
        console.log({
          test: snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        });
      });
    firebase
      .firestore()
      .collection("tourist-place")
      .get()
      .then((snapshot) =>
        console.log({
          "tourist-place": snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })),
        })
      );
  }, []);

  return (
    <Layout>
      Hello World !!!
      <h3>Welcome to Gatsby Tourism</h3>
      <h4>{data.site.siteMetadata.title}</h4>
    </Layout>
  );
};

export default Home;
