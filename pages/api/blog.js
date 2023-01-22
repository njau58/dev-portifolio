import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function (req, res) {

    
    const files =  fs.readdirSync(path.join(process.cwd(),"blogs"));

    // Get slug and frontmatter from blogs
    const blogs = files.map((filename) => {
      // Create slug
      const slug = filename.replace(".md", "");
  
      // Get frontmatter
      const markdownWithMeta = fs.readFileSync(
        path.join(process.cwd(),"blogs", filename),
        "utf-8"
      );
  
      const { data: frontmatter } = matter(markdownWithMeta);
  
      return {
        slug,
        frontmatter,
      };
    });
  
  
   

    
    res.status(200).json({ data: blogs })
  }