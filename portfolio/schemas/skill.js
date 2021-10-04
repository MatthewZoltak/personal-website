export default {
    name: "skill",
    title: "Skills",
    type: "document",
    fields:[
        {
            name: "name",
            type: "string",
        },
        {
            title: 'Skills',
            name: 'skills',
            type: 'array',
            of: [{type: 'string'}]
        },
    ]
}