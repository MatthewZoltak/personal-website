export default {
    name: "project",
    title: "Project",
    type: "document",
    fields:[
        {
            name: "title",
            type: "string",
        },
        {
            name: "company",
            type: "string",
        },
        {
            name: "startdate",
            type: "string",
        },
        {
            name: "enddate",
            type: "string",
        },
        {
            name: "place",
            type: "string"
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
          },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type:"string",
                },
            ],
            options: {
                layout: "tags"
            }

        }
    ]
}