import { FunctionComponent } from 'react';

type AlbumProps = {
  album: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };
};

const AlbumInfo: FunctionComponent<AlbumProps> = ({ album }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{album.name}</h2>
      <p className="text-gray-600">{album.release_date}</p>
      <img src={album.images[0].url} alt={album.name} className="w-full" />
      <a
        href={album.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-center text-blue-600 hover:underline"
      >
        Open in Spotify
      </a>
    </div>
  );
};

export default AlbumInfo;
