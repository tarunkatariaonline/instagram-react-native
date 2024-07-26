interface Image {
    id: number;
    uri: string;
  }
  
  interface Like {
    id: number;
    userId: string;
  }
  
  interface CommentReply {
    id: number;
    userId: string;
    comment: string;
  }
  
  interface Comment {
    id: number;
    userId: string;
    comment: string;
    reply: CommentReply[];
  }
  
  interface VideoUri {
    id: number;
    uri: string;
  }
  
 export interface PostInterface {
    id: number;
    desc: string;
    userId: string;
    postType: 'image' | 'reel'; // Assuming postType can be 'image' or 'video'
    images: Image[]|null;
    likes: Like[];
    videoUri: VideoUri | null;
    comments: Comment[];
    uploadedAt: string;
  }