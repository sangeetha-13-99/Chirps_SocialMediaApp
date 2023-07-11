export const posts = [
 
  {
    _id: "c6599cbc-337b-4fcf-a0f6-37bbde75926e",
    content:
      "Hey World, How's Going 😎",
    mediaUrl:"",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "c53f18ce-6760-4d61-8032-8c0e5926ab2e",
          firstName: "sravani",
          lastName: "Bhupati",
          userHandler:"sravs",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687094072/cld-sample.jpg",
        },
        {
          _id: "84380cb5-0627-4df2-a2a2-49f4644497ff",
          firstName: "Navya",
          lastName: "Dwivedi",
          userHandler:"Sweety",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687459883/defaultprofile.png"
        }
      ],
      dislikedBy: [],
    },
    comments:[
        {
          
          _id: "84380cb5-0627-4df2-a2a2-49f4644497ff",
          firstName: "Navya",
          lastName: "Dwivedi",
          userHandler:"Sweety",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687459883/defaultprofile.png",
          content:"Great",
          votes: {
            upvotedBy: [],
            downvotedBy: [],
          },
        }
    ],
    username: "sangeetha@gmail.com",
    createdAt: "2023-03-02T12:59:08+05:30",
    updatedAt: "2023-05-02T12:59:08+05:30",
  },
  {
    _id: "e9af9551-9ada-48d0-90c5-a4663c72c76b",
    content:
      "Hey Army 💜, check out My D-Day documentary, I hope you enjoyed the D-Day Tour, Going Home. Checkout My exclusive Albums under AgustD Radio 🫰🏼",
    mediaUrl:"https://open.spotify.com/playlist/37i9dQZF1DX5wcLXSDDcgy?si=04c88b2753c14066",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "736c42b4-8fb6-406e-be84-be1e33b000ea",
          firstName: "Sandeep",
          lastName: "Jula",
          userHandler:"sandeepsandy",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687211121/docs/leonardo.webp",
        },
        {
          _id: "c53f18ce-6760-4d61-8032-8c0e5926ab2e",
          firstName: "sravani",
          lastName: "Bhupati",
          userHandler:"sravs",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687094072/cld-sample.jpg",
        },
      ],
      dislikedBy: [
        {
          _id: "f0a5f795-ba7a-4f9a-ab1f-fa0eb90c95da",
          firstName: "sunil",
          lastName: "Chhetri",
          userHandler:"chhetri",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg"
        }
      ],
    },
    comments:[
      {
        _id: "736c42b4-8fb6-406e-be84-be1e33b000ea",
        firstName: "Sandeep",
        lastName: "Jula",
        userHandler:"sandeepsandy",
        userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687211121/docs/leonardo.webp",
        content:"What a Great Tour and I Wish more like this.",
        votes: {
          upvotedBy: [
            {
              _id: "e649c2e1-40a4-40e6-bb58-66e7264fc411",
              firstName: "Yoongi",
              lastName: "min",
              userHandler:"suga",
              userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687168370/docs/minyoongi.webp"
            },
          ],
          downvotedBy: [],
        },
      },
    ],
    username: "AgustDTBTS@gmail.com",
    createdAt: "2023-03-01T12:59:08+05:30",
    updatedAt: "2023-05-01T12:59:08+05:30",
  },
  {
    _id: "bb3da66f-6bc7-4029-9ead-94ffbc887811",
    content:
      "There is not Better Reward for hardward than tastiest food, Had a Happy meal yesterday evening",
    mediaUrl:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687469449/postFoodimage.jpg",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "f1e8067b-27ba-42ea-9ce2-d4879e530438",
          firstName: "simons",
          lastName: "Cat",
          userHandler:"simonscat",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg"
        }
      ],
      dislikedBy: [],
    },
    comments:[
      {
        _id: "f1e8067b-27ba-42ea-9ce2-d4879e530438",
        firstName: "simons",
        lastName: "Cat",
        userHandler:"simonscat",
        userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg",
        content:"Wow, Momo's,noodles,... Iam Craving Now",
        votes: {
          upvotedBy: [
            {
              _id: "6a6b43f2-b6dd-47f2-ba43-625b6ee2a707",
              firstName: "Sangeetha",
              lastName: "Jula",
              userHandler:"sangeethajula",
              userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg"
            },
            {
              _id: "e649c2e1-40a4-40e6-bb58-66e7264fc411",
              firstName: "Yoongi",
              lastName: "min",
              userHandler:"suga",
              userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687168370/docs/minyoongi.webp"
            },
          ],
          downvotedBy: [],
        },
      },
    ],
    username: "sangeetha@gmail.com",
    createdAt: "2023-03-12T12:59:08+05:30",
    updatedAt: "2023-05-24T12:59:08+05:30",
  },
  {
    _id: "95ae9a9f-6924-4d31-80c7-9e96eefdf2ff",
    content:
      "Check Out My Meow , Its her normal day of Being Cute",
    mediaUrl:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687094051/samples/animals/cat.jpg",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "f1e8067b-27ba-42ea-9ce2-d4879e530438",
          firstName: "simons",
          lastName: "Cat",
          userHandler:"simonscat",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg"
        },
        {
          _id: "6a6b43f2-b6dd-47f2-ba43-625b6ee2a707",
          firstName: "Sangeetha",
          lastName: "Jula",
          userHandler:"sangeethajula",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg"
        },
      ],
      dislikedBy: [],
    },
    comments:[
      {
        _id: "f1e8067b-27ba-42ea-9ce2-d4879e530438",
        firstName: "simons",
        lastName: "Cat",
        userHandler:"simonscat",
        userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg",
        content:"I love my cat poses🐈",
        votes: {
          upvotedBy: [
            {
              _id: "6a6b43f2-b6dd-47f2-ba43-625b6ee2a707",
              firstName: "Sangeetha",
              lastName: "Jula",
              userHandler:"sangeethajula",
              userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg"
            },
            {
              _id: "e649c2e1-40a4-40e6-bb58-66e7264fc411",
              firstName: "Yoongi",
              lastName: "min",
              userHandler:"suga",
              userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687168370/docs/minyoongi.webp"
            },
          ],
          downvotedBy: [],
        },
      },
      {
        _id: "84380cb5-0627-4df2-a2a2-49f4644497ff",
        firstName: "Navya",
        lastName: "Dwivedi",
        userHandler:"Sweety",
        userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687459883/defaultprofile.png",
        content:'haha 😺',
        votes: {
          upvotedBy: [
            {
              _id: "6a6b43f2-b6dd-47f2-ba43-625b6ee2a707",
              firstName: "Sangeetha",
              lastName: "Jula",
              userHandler:"sangeethajula",
              userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg"
            },
          ],
          downvotedBy: [],
        },
      }
    ],
    username: "simon@gmail.com",
    createdAt: "2023-06-12T12:59:08+05:30",
    updatedAt: "2023-06-24T12:59:08+05:30",
  },
  {
    _id: "6146dbe0-00c4-4e33-a278-36d94d94bf18",
    content:
      "Lift Off",
    mediaUrl:"https://res.cloudinary.com/chirpssocialmediaapp/video/upload/v1687601169/twiitervideo.mp4",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "f1e8067b-27ba-42ea-9ce2-d4879e530438",
          firstName: "simons",
          lastName: "Cat",
          userHandler:"simonscat",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg"
        },
        {
          _id: "6a6b43f2-b6dd-47f2-ba43-625b6ee2a707",
          firstName: "Sangeetha",
          lastName: "Jula",
          userHandler:"sangeethajula",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg"
        },
        {
          _id: "e649c2e1-40a4-40e6-bb58-66e7264fc411",
          firstName: "Yoongi",
          lastName: "min",
          userHandler:"suga",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687168370/docs/minyoongi.webp"
        },
        {
            _id: "0b73d84b-0605-4c9c-9d99-243252299056",
            firstName: "Elon",
            lastName: "Musk",
            userHandler:"Elon",
            userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687458120/elonmusk.jpg",
        }
      ],
      dislikedBy: [],
    },
    comments:[
      {
        _id: "0b73d84b-0605-4c9c-9d99-243252299056",
        firstName: "Elon",
        lastName: "Musk",
        userHandler:"Elon",
        userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687458120/elonmusk.jpg",
        content:"Im loving this",
        votes: {
          upvotedBy: [
            {
              _id: "6a6b43f2-b6dd-47f2-ba43-625b6ee2a707",
              firstName: "Sangeetha",
              lastName: "Jula",
              userHandler:"sangeethajula",
              userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg"
            },
            {
              _id: "e649c2e1-40a4-40e6-bb58-66e7264fc411",
              firstName: "Yoongi",
              lastName: "min",
              userHandler:"suga",
              userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687168370/docs/minyoongi.webp"
            },
          ],
          downvotedBy: [],
        },
      },
      {
        _id: "6a6b43f2-b6dd-47f2-ba43-625b6ee2a707",
        firstName: "Sangeetha",
        lastName: "Jula",
        userHandler:"sangeethajula",
        userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg",
        content:'🚀🚀',
        votes: {
          upvotedBy: [
            {
              _id: "6a6b43f2-b6dd-47f2-ba43-625b6ee2a707",
              firstName: "Sangeetha",
              lastName: "Jula",
              userHandler:"sangeethajula",
              userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg"
            },
          ],
          downvotedBy: [],
        },
      }
    ],
    username: "TelonMusk@gmail.com",
    createdAt: "2023-06-11T12:59:08+05:30",
    updatedAt: "2023-07-01T12:59:08+05:30",
  },
  {
    _id: "88af4a75-7705-4396-a387-b7cd021a3589",
    content:
      "Obsessed with this nature, me and my friend having great fun travelling and experiencing nature🏕️",
    mediaUrl:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687604892/forest.webp",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "6a6b43f2-b6dd-47f2-ba43-625b6ee2a707",
          firstName: "Sangeetha",
          lastName: "Jula",
          userHandler:"sangeethajula",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg"
        },
        {
          _id: "c53f18ce-6760-4d61-8032-8c0e5926ab2e",
          firstName: "sravani",
          lastName: "Bhupati",
          userHandler:"sravs",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687094072/cld-sample.jpg",
        },
        {
          _id: "84380cb5-0627-4df2-a2a2-49f4644497ff",
          firstName: "Navya",
          lastName: "Dwivedi",
          userHandler:"Sweety",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687459883/defaultprofile.png"
        }
      ],
      dislikedBy: [],
    },
    comments:[
        {
          _id: "6a6b43f2-b6dd-47f2-ba43-625b6ee2a707",
          firstName: "Sangeetha",
          lastName: "Jula",
          userHandler:"sangeethajula",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg",
          content:"I'm too loving it, we should plan more trips",
          votes: {
            upvotedBy: [],
            downvotedBy: [],
          },
        },
        {
          _id: "84380cb5-0627-4df2-a2a2-49f4644497ff",
          firstName: "Navya",
          lastName: "Dwivedi",
          userHandler:"Sweety",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687459883/defaultprofile.png",
          content:"lovely",
          votes: {
            upvotedBy: [],
            downvotedBy: [],
          },
        }
    ],
    username: "AriaHolmes@gmail.com",
    createdAt: "2023-06-11T12:59:08+05:30",
    updatedAt: "2023-07-02T12:59:08+05:30",
  },
  {
    _id: "63d26963-4738-4bab-ac92-dfd18e5f3ef8",
    content:
      "Krishna says: the soul is reborn in another body, or, for those who have fully grasped the true teachings, it achieves release (moksha) or extinction (nirvana)—that is, freedom from the wheel of rebirth.",
    mediaUrl:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687604892/forest.webp",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "6a6b43f2-b6dd-47f2-ba43-625b6ee2a707",
          firstName: "Sangeetha",
          lastName: "Jula",
          userHandler:"sangeethajula",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg"
        },
        {
          _id: "c53f18ce-6760-4d61-8032-8c0e5926ab2e",
          firstName: "sravani",
          lastName: "Bhupati",
          userHandler:"sravs",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687094072/cld-sample.jpg",
        },
        {
          _id: "84380cb5-0627-4df2-a2a2-49f4644497ff",
          firstName: "Navya",
          lastName: "Dwivedi",
          userHandler:"Sweety",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687459883/defaultprofile.png"
        }
      ],
      dislikedBy: [],
    },
    comments:[],
    username: "sangeetha@gmail.com",
    createdAt: "2023-05-11T12:59:08+05:30",
    updatedAt: "2023-06-02T12:59:08+05:30",
  },
  {
    _id: "3bfcd591-82fa-40bf-9691-de15319091fc",
    content:
      "Don't be Upset with people or situations both are powerless without your reactions, Army saranghae💜",
    mediaUrl:"",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "6a6b43f2-b6dd-47f2-ba43-625b6ee2a707",
          firstName: "Sangeetha",
          lastName: "Jula",
          userHandler:"sangeethajula",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg"
        },
        {
          _id: "736c42b4-8fb6-406e-be84-be1e33b000ea",
          firstName: "Sandeep",
          lastName: "Jula",
          userHandler:"sandeepsandy",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687211121/docs/leonardo.webp",
        },
        {
          _id: "c53f18ce-6760-4d61-8032-8c0e5926ab2e",
          firstName: "sravani",
          lastName: "Bhupati",
          userHandler:"sravs",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687094072/cld-sample.jpg",
        },
      ],
      dislikedBy: [
      ],
    },
    comments:[
      {
        _id: "6a6b43f2-b6dd-47f2-ba43-625b6ee2a707",
        firstName: "Sangeetha",
        lastName: "Jula",
        userHandler:"sangeethajula",
        userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg",
        content:"oh, i truly wanted this now😣",
        votes: {
          upvotedBy: [
            {
              _id: "e649c2e1-40a4-40e6-bb58-66e7264fc411",
              firstName: "Yoongi",
              lastName: "min",
              userHandler:"suga",
              userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687168370/docs/minyoongi.webp"
            }
          ],
          downvotedBy: [],
        },
      },
    ],
    username: "AgustDTBTS@gmail.com",
    createdAt: "2023-07-01T08:59:08+05:30",
    updatedAt: "2023-07-02T08:59:08+05:30",
  },
  {
    _id: "85b0d8b8-8b5d-4e6b-a59b-bb0d925dd63b",
    content:
      "my clumsy son, just like her mom",
    mediaUrl:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687607743/dog.jpg",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "e649c2e1-40a4-40e6-bb58-66e7264fc411",
          firstName: "Yoongi",
          lastName: "min",
          userHandler:"suga",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687168370/docs/minyoongi.webp"
        },
        {
          _id: "736c42b4-8fb6-406e-be84-be1e33b000ea",
          firstName: "Sandeep",
          lastName: "Jula",
          userHandler:"sandeepsandy",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687211121/docs/leonardo.webp",
        },
        {
          _id: "c53f18ce-6760-4d61-8032-8c0e5926ab2e",
          firstName: "sravani",
          lastName: "Bhupati",
          userHandler:"sravs",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687094072/cld-sample.jpg",
        },

      ],
      dislikedBy: [
      ],
    },
    comments:[
      {
        _id: "736c42b4-8fb6-406e-be84-be1e33b000ea",
        firstName: "Sandeep",
        lastName: "Jula",
        userHandler:"sandeepsandy",
        userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687211121/docs/leonardo.webp",
        content:"adorable🫠",
        votes: {
          upvotedBy: [
            {
              _id: "e649c2e1-40a4-40e6-bb58-66e7264fc411",
              firstName: "Yoongi",
              lastName: "min",
              userHandler:"suga",
              userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687168370/docs/minyoongi.webp"
            }
          ],
          downvotedBy: [],
        },
      },
      {
        _id: "736c42b4-8fb6-406e-be84-be1e33b000ea",
        firstName: "Sandeep",
        lastName: "Jula",
        userHandler:"sandeepsandy",
        userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687211121/docs/leonardo.webp",
        content:"so cute",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "sangeetha@gmail.com",
    createdAt: "2023-07-01T10:59:08+05:30",
    updatedAt: "2023-07-02T10:59:08+05:30",
  },
  {
    _id: "e4fb7a42-c143-4670-8799-1f7e3a0eb8d3",
    content:
      "oh, its long week & overwhelmed,i really need a break, Enjoying my week off with bing watch, what about u guys ?",
    mediaUrl:"",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "c53f18ce-6760-4d61-8032-8c0e5926ab2e",
          firstName: "sravani",
          lastName: "Bhupati",
          userHandler:"sravs",
          userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687094072/cld-sample.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments:[
      {
        _id: "736c42b4-8fb6-406e-be84-be1e33b000ea",
        firstName: "Sandeep",
        lastName: "Jula",
        userHandler:"sandeepsandy",
        userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687211121/docs/leonardo.webp",
        content:"true, im a sloth today",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "sangeetha@gmail.com",
    createdAt: "2023-07-01T11:59:08+05:30",
    updatedAt: "2023-07-02T11:59:08+05:30",
  },
];
