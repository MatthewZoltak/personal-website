export default {
    name: "work",
    title: "Work",
    type: "document",
    fields:[
        {
            name: "company",
            type: "string",
        },
        {
            name: "title",
            type: "string",
        },
        {
            name: "startdate",
            type: "string",
        },
        {
            name: "finishdate",
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
        }
    ]
}