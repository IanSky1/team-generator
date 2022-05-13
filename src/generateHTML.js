const path = require('path');
const fs = require('fs');
const templatesDir = path.resolve(_dirname, "../templates");

// generateHTML function for filtering through the various employee roles
const generateHTML = employees => {
    const html = [];

    html.push(...employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );

    html.push(...employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        );

    html.push(...employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        );

    return generateMain(html.join(""));
};