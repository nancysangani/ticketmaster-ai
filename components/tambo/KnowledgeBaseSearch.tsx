"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, ExternalLink } from "lucide-react";
import { mockKnowledgeBase } from "@/lib/mock-data";
import { motion } from "framer-motion";
import { useState } from "react";

export default function KnowledgeBaseSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = searchTerm
    ? mockKnowledgeBase.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : mockKnowledgeBase;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Knowledge Base
          </CardTitle>
          <CardDescription>Search our help articles and guides</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search for help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              {filteredArticles.length} article
              {filteredArticles.length !== 1 ? "s" : ""} found
            </p>
            {filteredArticles.map((article) => (
              <a
                key={article.id}
                href={article.url}
                className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-sm group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h4>
                      <ExternalLink className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                </div>
              </a>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-8">
              <Search className="h-12 w-12 mx-auto text-gray-300 mb-3" />
              <p className="text-sm text-gray-600">
                No articles found for &quot;{searchTerm}&quot;
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Try different keywords or browse all articles
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
