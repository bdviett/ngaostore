"use client";

import React from "react";
import type { BlogArticleSlug } from "@/data/blog-articles";
import SimGhepHaNoi from "./SimGhepHaNoi";
import SimGhepDaNang from "./SimGhepDaNang";
import GhepSimIphoneLock from "./GhepSimIphoneLock";
import MuaSimGhep from "./MuaSimGhep";
import ThayOSimIphoneLock from "./ThayOSimIphoneLock";

/** Map slug -> component. Thêm bài viết mới: tạo component + thêm vào đây + blog.json + blog-articles.ts */
export const BLOG_ARTICLE_COMPONENTS: Record<BlogArticleSlug, React.ComponentType> = {
  "sim-ghep-ha-noi": SimGhepHaNoi,
  "sim-ghep-da-nang": SimGhepDaNang,
  "ghep-sim-iphone-lock": GhepSimIphoneLock,
  "mua-sim-ghep": MuaSimGhep,
  "thay-o-sim-eid-iphone-lock": ThayOSimIphoneLock,
};
