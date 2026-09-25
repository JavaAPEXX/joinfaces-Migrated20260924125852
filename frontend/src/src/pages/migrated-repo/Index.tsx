import React from 'react';

/**
 * Source: joinfaces-starters\adminfaces-spring-boot-starter\src\test\resources\META-INF\resources\index.xhtml
 * 
 * Analysis:
 * - This is a JSF Facelets composition file (<ui:composition>).
 * - It uses a template: #{layoutMB.template}.
 * - It defines the 'head-end' section with a parameter renderBreadCrumb=false.
 * - It defines the 'title' section with the text "Hello Adminfaces".
 * - There are no forms, tables, inputs, or dynamic data bindings in this specific file.
 * - The backend context provided (Person.java) is not referenced in this JSP.
 * - No API endpoints are defined or called in this JSP.
 * 
 * Migration Strategy:
 * - Since the template is dynamic (#{layoutMB.template}) and not provided, we cannot reproduce the exact layout wrapper.
 * - We will create a minimal React component that renders the title content defined in the JSP.
 * - We will preserve the semantic structure by rendering the title text.
 * - No state, effects, or API calls are required as none exist in the source.
 */

const Index: React.FC = () => {
  return (
    <div>
      <h1>Hello Adminfaces</h1>
    </div>
  );
};

export default Index;