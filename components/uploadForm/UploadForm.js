import { useState } from 'react';
import axios from 'axios';

const BUCKET_URL = 'http://awbuckit.s3-website.us-east-2.amazonaws.com/';

export default function UploadForm() {
  const [file, setFile] = useState();
  const [uploadingStatus, setUploadingStatus] = useState();
  const [uploadedFile, setUploadedFile] = useState();

  const selectFile = e => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    setUploadingStatus('Uploading the file to AWS S3');

    let { data } = await axios.post('/api/posts/upload', {
      name: file.name,
      type: file.type,
    });

    console.log(data);

    const url = data.url;
    let { data: newData } = await axios.put(url, file, {
      headers: {
        'Content-type': file.type,
        'Access-Control-Allow-Origin': '*',
      },
    });

    setUploadedFile(BUCKET_URL + file.name);
    setFile(null);
  };

  return (
    <div>
      <div>
        <div>
          <main>
            <input
              onChange={e => selectFile(e)}
              type="file"
              accept="image/*"
            ></input>
            {/* <input
              value={caption}
              onChange={e => setCaption(e.target.value)}
              type="text"
              placeholder="Caption"
            ></input> */}
            {file && (
              <>
                <p>Selected file: {file.name}</p>
                <button onClick={uploadFile}>Upload a File!</button>
              </>
            )}
            {uploadingStatus && <p>{uploadingStatus}</p>}
            {uploadedFile && <img src={uploadedFile} />}
          </main>
        </div>
      </div>
    </div>
  );
}
