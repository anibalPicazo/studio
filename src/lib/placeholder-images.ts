import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const placeholderImagesArray: ImagePlaceholder[] = data.placeholderImages;

export const PlaceHolderImagesMap: Map<string, ImagePlaceholder> = new Map(
  placeholderImagesArray.map(image => [image.id, image])
);

export const PlaceHolderImages: ImagePlaceholder[] = placeholderImagesArray;
