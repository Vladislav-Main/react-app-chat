export const defaultValues = {
  users: {
    1: {
      id: 1,
      userName: 'Alice Freeman',
      userAvatar:
        'https://st3.depositphotos.com/3200101/i/600/depositphotos_194261734-stock-photo-portrait-of-a-businesswoman-against.jpg',
    },
    2: {
      id: 2,
      userName: 'Josefina',
      userAvatar:
        'https://st3.depositphotos.com/3200101/i/600/depositphotos_194261734-stock-photo-portrait-of-a-businesswoman-against.jpg',
    },
    3: {
      id: 3,
      userName: 'Velazquez',
      userAvatar:
        'https://st.depositphotos.com/1743476/1276/i/950/depositphotos_12767124-stock-photo-joyful-man-face.jpg',
    },
    4: {
      id: 4,
      userName: 'Barrera',
      userAvatar:
        'https://st.depositphotos.com/1743476/1276/i/950/depositphotos_12767124-stock-photo-joyful-man-face.jpg',
    },
    5: {
      id: 5,
      userName: 'Valerra',
      userAvatar:
        'https://st.depositphotos.com/1743476/1276/i/950/depositphotos_12767124-stock-photo-joyful-man-face.jpg',
    },
  },
  dialogsList: [
    {
      userId: 1,
      lastMessage: {
        messageId: 1633119020010,
        userId: 1,
        messagesContent: 'ku',
        createdAt: 1633119020010,
      },
    },
    {
      userId: 2,
      lastMessage: {
        messageId: 1633119020009,
        userId: 1,
        messagesContent: 'yo',
        createdAt: 1633119020009,
      },
    },
    {
      userId: 3,
      lastMessage: {
        messageId: 1633119020008,
        userId: 1,
        messagesContent: 'shalom',
        createdAt: 1633119020008,
      },
    },
    {
      userId: 4,
      lastMessage: {
        messageId: 1633119020007,
        userId: 1,
        messagesContent: 'privet',
        createdAt: 1633119020007,
      },
    },
    {
      userId: 5,
      lastMessage: {
        messageId: 1633119020006,
        userId: 1,
        messagesContent: 'i tebe',
        createdAt: 1633119020006,
      },
    },
  ],
  messageList: [
    {
      dialogId: 1,
      messages: [
        {
          messageId: 1633119020009,
          messagesContent: 'Privet',
          createdAt: 1633119020009,
          messageSenderId: 1,
        },
        {
          messageId: 1633119020010,
          messagesContent: 'ku',
          createdAt: 1633119020010,
          messageSenderId: 'abc',
        },
      ],
    },
    {
      dialogId: 2,
      messages: [
        {
          messageId: 1633119020008,
          messagesContent: 'hi',
          createdAt: 1633119020008,
          messageSenderId: 2,
        },
        {
          messageId: 1633119020009,
          messagesContent: 'yo',
          createdAt: 1633119020009,
          messageSenderId: 'abc',
        },
      ],
    },
    {
      dialogId: 3,
      messages: [
        {
          messageId: 1633119020007,
          messagesContent: 'zdraste',
          createdAt: 1633119020007,
          messageSenderId: 3,
        },
        {
          messageId: 1633119020008,
          messagesContent: 'shalom',
          createdAt: 1633119020008,
          messageSenderId: 'abc',
        },
      ],
    },
    {
      dialogId: 4,
      messages: [
        {
          messageId: 1633119020006,
          messagesContent: 'nihao',
          createdAt: 1633119020006,
          messageSenderId: 4,
        },
        {
          messageId: 1633119020007,
          messagesContent: 'privet',
          createdAt: 1633119020007,
          messageSenderId: 'abc',
        },
      ],
    },
    {
      dialogId: 5,
      messages: [
        {
          messageId: 1633119020005,
          messagesContent: 'hello',
          createdAt: 1633119020005,
          messageSenderId: 5,
        },
        {
          messageId: 1633119020006,
          messagesContent: 'i tebe',
          createdAt: 1633119020006,
          messageSenderId: 'abc',
        },
      ],
    },
  ],
  searchTerm: '',
};
