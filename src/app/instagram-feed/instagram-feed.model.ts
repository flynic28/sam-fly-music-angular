export interface InstagramFeedObj {
    pagination: InstagramPaginationObj;
    meta: {
        code: number;
    };
    data: Array<InstagramFeedData>;
}

export interface InstagramPaginationObj {
    next_max_id: string;
    next_url: string;
}

export interface InstagramFeedData {
    id: number;
    attribution: string;
    caption: InstagramCaption;
    comments: InstagramCount;
    created_time: number;
    filter: string;
    images: {
        standard_resolution: InstagramImage;
        thumbnail: InstagramImage;
        low_resolution: InstagramImage;
    };
    likes: InstagramCount;
    link: string;
    location: InstagramLocation;
    tags: string[];
    type: string;
    user: InstagramUser;
    user_has_liked: boolean;
    users_in_photo: any;
}

export interface InstagramCaption {
    id: number;
    from: InstagramUser;
    created_time: number;
    text: string;
}

export interface InstagramImage {
    width: number;
    height: number;
    url: string;
}

export interface InstagramCount {
    count: number;
}

export interface InstagramLocation {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

export interface InstagramUser {
    id: number;
    full_name: string;
    profile_picture: string;
    username: string;
}
