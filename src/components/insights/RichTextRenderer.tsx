import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong className="font-bold text-foreground">{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.CODE]: (text) => (
      <code className="bg-muted/30 rounded px-1.5 py-0.5 text-sm font-mono">{text}</code>
    ),
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (_node, children) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    [BLOCKS.HEADING_2]: (_node, children) => <h2 className="text-2xl font-bold mt-8 mb-3">{children}</h2>,
    [BLOCKS.HEADING_3]: (_node, children) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
    [BLOCKS.HEADING_4]: (_node, children) => <h4 className="text-lg font-semibold mt-4 mb-2">{children}</h4>,
    [BLOCKS.PARAGRAPH]: (_node, children) => <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>,
    [BLOCKS.QUOTE]: (_node, children) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
        {children}
      </blockquote>
    ),
    [BLOCKS.UL_LIST]: (_node, children) => <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">{children}</ul>,
    [BLOCKS.OL_LIST]: (_node, children) => <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (_node, children) => <li>{children}</li>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title, description } = node.data.target.fields;
      const url = file?.url ? `https:${file.url}` : "";
      if (!url) return null;
      return (
        <figure className="my-8">
          <img
            src={`${url}?w=800`}
            alt={description || title || ""}
            className="rounded-xl w-full"
            loading="lazy"
          />
          {description && (
            <figcaption className="text-center text-sm text-muted-foreground mt-2">
              {description}
            </figcaption>
          )}
        </figure>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
      >
        {children}
      </a>
    ),
  },
};

interface RichTextRendererProps {
  content: any;
}

export const RichTextRenderer = ({ content }: RichTextRendererProps) => {
  if (!content) return null;
  return (
    <div className="prose-custom max-w-none">
      {documentToReactComponents(content, options)}
    </div>
  );
};
