export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Trang chủ",
  },
  {
    imgURL: "/assets/search.svg",
    route: "/search",
    label: "Tìm kiếm",
  },
  {
    imgURL: "/assets/heart.svg",
    route: "/activity",
    label: "Hoạt Động",
  },
  {
    imgURL: "/assets/create.svg",
    route: "/create-thread",
    label: "Tạo chủ đề mới",
  },
  {
    imgURL: "/assets/community.svg",
    route: "/communities",
    label: "Mọi người",
  },
  {
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "Trang cá nhân",
  },
];

export const profileTabs = [
  { value: "threads", label: "Bài Viết", icon: "/assets/create.svg" },
  { value: "replies", label: "Bình Luận", icon: "/assets/reply.svg" },
  { value: "tagged", label: "Thẻ", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Bài Viết", icon: "/assets/reply.svg" },
  { value: "members", label: "Người Dùng", icon: "/assets/members.svg" },
  { value: "requests", label: "Yêu Cầu", icon: "/assets/request.svg" },
];
