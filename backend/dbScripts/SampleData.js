db = db.getSiblingDB('gogetter')

//GOALS COLLECTION
db.createCollection('goals')
goalsCollection = db.getCollection("goals")
goalsCollection.remove({})
goalsCollection.insert(
{
	goalId: "1",
	title: "Intermittent Fasting",
	description: "Follow 16:8 fasting rule for 30 days",
	userId: "1",
	startDate: new Date("2023-03-25"),
	endDate: new Date("2023-04-25"),
	category: "Health",
	progress: "Not Started",
	reminder: false,
}
)
goalsCollection.insert(
{
	goalId: "2",
	title: "Learn typescript",
	description: "Follow typescript course on courseera",
	userId: "1",
	startDate: new Date("2023-04-15"),
	endDate: new Date("2023-05-15"),
	category: "Career",
	progress: "Not Started",
	reminder: false,
}
)

goalsCollection.insert(
{
    goalId: "3",
    title: "Trekking",
    description: "Take lessons on trekking dos and donts",
    userId: "2",
    startDate: new Date("2023-05-07"),
    endDate: new Date("2023-06-07"),
    category: "Travel",
    progress: "Not Started",
    reminder: false,
}
)

goalsCollection.insert(
{
    goalId: "4",
    title: "Eat more protein",
    description: "intake vegan protein",
    userId: "2",
    startDate: new Date("2023-05-20"),
    endDate: new Date("2023-06-20"),
    category: "Health",
    progress: "Not Started",
    reminder: false,
}
)

goalsCollection.insert(
    {
        goalId: "5",
        title: "Leetcode",
        description: "Do 2 questions daily",
        userId: "1",
        startDate: new Date("2023-04-15"),
        endDate: new Date("2023-05-15"),
        category: "Career",
        progress: "Not Started",
        reminder: false,
    }
    )

    goalsCollection.insert(
        {
            goalId: "6",
            title: "Family Calls",
            description: "Attend family calls on zoom every saturday and sunday",
            userId: "1",
            startDate: new Date("2023-07-15"),
            endDate: new Date("2023-08-15"),
            category: "Relationship",
            progress: "Not Started",
            reminder: false,
        }
        )

    goalsCollection.insert(
    {
        goalId: "7",
        title: "Italy Trip",
        description: "Walk 2 miles daily to form habit to walk when you go italy. Save some money too.",
        userId: "1",
        startDate: new Date("2023-06-15"),
        endDate: new Date("2023-09-15"),
        category: "Travel",
        progress: "Not Started",
        reminder: false,
    }
    )

    goalsCollection.insert(
        {
            goalId: "8",
            title: "Contribute in ACM-W Club",
            description: "Come up with ideas and conduct workshops",
            userId: "1",
            startDate: new Date("2023-09-19"),
            endDate: new Date("2023-12-10"),
            category: "School",
            progress: "Not Started",
            reminder: false,
        }
        )

//USERS COLLECTION
db.createCollection('users')
usersCollection = db.getCollection("users")
usersCollection.remove({})
usersCollection.insert({
    userId: "1",
    oauthId: "117027176084175812322",
    name: "Preedhi Garg",
    email: "gargpreedhi@gmail.com",
    goalCreated: 6,
    picture: "https://lh3.googleusercontent.com/a/AAcHTteZbkVqctfrbfNzZ_Wr5LiU2_CLb10oGYv8i43s=s100"
}
)

usersCollection.insert({
    userId: "2",
    oauthId: "113188584359730329106",
    name: "GoGetter Test",
    email: "goGetterAppTest@gmail.com",
    goalCreated: 2,
    picture: "https://lh3.googleusercontent.com/a/AAcHTtc9jvF4dkRHXSauNcZdwyji1p1S1Fd0kAEWnfkV=s100"
})

//REMINDERS COLLECTION
db.createCollection('reminders')
reminderCollection = db.getCollection("reminders")
reminderCollection.remove({})
reminderCollection.insert({
    reminderId:"1",
    goalId: "1",
    userId: "1",
    message: "Do not forget to fast" ,
    reminderDate: new Date("2023-04-20")
})

reminderCollection.insert({
    reminderId:"2",
    goalId: "2",
    userId: "1",
    message: "Complete your typescript lesson" ,
    reminderDate: new Date("2023-05-10")
})
