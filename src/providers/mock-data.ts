import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "An introductory course covering the basics of programming and computer science principles.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: "MATH201",
        name: "Calculus I",
        department: "Math",
        description: "A fundamental course on differential and integral calculus.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: "ENG102",
        name: "Advanced English Composition",
        department: "English",
        description: "Focuses on advanced writing techniques, critical thinking, and literary analysis.",
        createdAt: new Date().toISOString(),
    },
];
