interface DiscussionHeading {
  date: string;
  user: string;
  title: string;
  tags: string;
}

interface DiscussionTopic extends DiscussionHeading {
  id: number;
  description: string;
}

interface DiscussionResponse extends DiscussionTopic {
  references?: string;
}
