export const users = [
    {id : 1, name: 'Mahesh', role: 'student'},
    {id : 2, name: 'Ramesh', role: 'student'},
    {id : 3, name: 'Suresh', role: 'student'},
    {id : 4, name: 'Srikanth', role: 'admin'},
    {id : 5, name: 'Narasimha', role: 'admin'}

]

export const assignments = [
    {
        id: 1,
        title: 'Math Assignment',
        description: 'Algebra and Geometry',
        dueDate: '2023-09-15',
        createdBy: 4, 
        assignedTo: [1, 2, 3] 
    },
    {
        id: 2,
        title: 'Science Assignment',
        description: 'Physics and Chemistry',
        dueDate: '2023-09-20',
        createdBy: 5, 
        assignedTo: [1, 3] 
    },
    {
        id: 3,
        title: 'History Assignment',
        description: 'World War II',
        dueDate: '2023-09-25',
        createdBy: 4, 
        assignedTo: [2, 3] 
    },
    {
        id: 4,
        title: 'English Assignment',
        description: 'Essay Writing',
        dueDate: '2023-09-30',
        createdBy: 5, 
        assignedTo: [1, 2] 
    },
    {
        id: 5,
        title: 'Computer Science Assignment',
        description: 'Data Structures',
        dueDate: '2023-10-05',
        createdBy: 4, 
        assignedTo: [1, 2, 3] 
    }
]