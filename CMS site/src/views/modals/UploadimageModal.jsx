import { Icon } from "@iconify/react"

export default function UploadImageModal() {
  return (
    <div className="flex items-center justify-center w-[1000px]">
      <label
        for="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Icon
            icon="tabler:cloud-upload"
            width="40"
            height="40"
            className="text-gray-400 font-bold"
          />
          <p className="mb-2 text-lg text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, or JPG
          </p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
}
