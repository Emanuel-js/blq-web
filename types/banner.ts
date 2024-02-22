interface BannerData {
    createdAt: string;
    creator: string;
    deletedAt: string | null;
    deleter: string | null;
    endDate: string;
    linkUrl: string;
    mainBannerId: number;
    mobileImageUrl: string;
    pcImageUrl: string;
    sort: number;
    startDate: string;
    title: string;
    updatedAt: string;
    updater: string;
  }
  

  interface MainShortcut {
    createdAt: string;
    creator: string;
    deletedAt: string | null;
    deleter: string | null;
    imageUrl: string;
    linkUrl: string;
    mainShortcutId: number;
    sort: number;
    title: string;
    updatedAt: string;
    updater: string;
  }
  