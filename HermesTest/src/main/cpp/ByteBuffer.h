#include <jsi.h>

#include <fcntl.h>
#include <sys/mman.h>
#include <sys/stat.h>
#include <unistd.h>
#include <memory>
#include <system_error>

namespace facebook {
    namespace jsi {
        namespace jni {
            class ByteBuffer : public jsi::Buffer {
            public:
                ByteBuffer(uint8_t *bytes, size_t size) : data_(bytes), size_(size) {

                }

                size_t size() const override {
                    return size_;
                }

                const uint8_t *data() const override {
                    return data_;
                }

                ~ByteBuffer() override {
                    delete[] data_;
                }

            private:
                uint8_t *data_;
                size_t size_;
            };

            class JavaByteBuffer : public jsi::Buffer {
            public:
                JavaByteBuffer(JNIEnv *env, jbyteArray bytes) : env(env), bytes(bytes) {
                    buffer = env->GetByteArrayElements(bytes, nullptr);
                    size_ = env->GetArrayLength(bytes);
                }

                size_t size() const override {
                    return size_;
                }

                const uint8_t *data() const override {
                    return reinterpret_cast<uint8_t *>(buffer);
                }

                ~JavaByteBuffer() override {
                    env->ReleaseByteArrayElements(bytes, buffer, 0);
                }

            private:
                JNIEnv *env;
                jbyteArray bytes;
                jbyte *buffer;
                size_t size_;

            };
        }
    }
}